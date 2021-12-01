var http = require('http'); 

// favicon.ico 를 한 번더 요청하여 발생하는 문제.(콘솔이 두번찍힘)
// 아래와 같이 작성하면 서버를 생성한 후, 사용자로 부터 http 요청이 들어오면 function 블럭내부의 코드를 실행해서 응답한다.

var server = http.createServer(function(request,res){ 
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", '*');
    const soapRequest = require('easy-soap-request');
    const convert = require('xml-js');
    const url = "https://api.maplestory.nexon.com/soap/maplestory.asmx?wsdl";
    let userid = '7029336';
    let xml =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="https://api.maplestory.nexon.com/soap/">'+
            '<soapenv:Header/>'+
            '<soapenv:Body>'+
                '<soap:GetCharacterInfoByAccountID>'+
                    `<soap:AccountID>${userid}</soap:AccountID>`+
                '</soap:GetCharacterInfoByAccountID>'+
            '</soapenv:Body>'+
        '</soapenv:Envelope>';
    const headers = {
        'Content-Type' : 'text/xml; charset=utf-8',
        'Content-Length' : xml.length,
        'SOAPAction' : 'https://api.maplestory.nexon.com/soap/GetCharacterInfoByAccountID'
    };

    const getUserData = async(callBack) => {
        try{
            const {response} = await soapRequest({
                url : url,
                headers : headers,
                xml : xml,
                timeout : 1000
            });
            const {header, body, statusCode} = response;

            let xmlToJson = JSON.parse(convert.xml2json(body, {compact: true, spaces: 4}));
            let userInfo = xmlToJson['soap:Envelope']['soap:Body']['GetCharacterInfoByAccountIDResponse']['GetCharacterInfoByAccountIDResult']['diffgr:diffgram']['NewDataSet']['UserInfo'];
            userInfo.userid = userid;
            
            const user = {
                'WorldName': userInfo['WorldName']['_text'],
                'CharacterName': userInfo['CharacterName']['_text'],
                'JobDetail': userInfo['JobDetail']['_text'],
                'Lev': userInfo['Lev']['_text'],
                'AvatarImgURL': userInfo['AvatarImgURL']['_text'],
                'userid' : userid
            };
            let json = JSON.stringify(userInfo);
            callBack(json);
        }catch (error) {
            console.error(error);
        }
    }
    getUserData((userXML) => {
        res.end(userXML);
    });
    
});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
server.listen(8080, function(){ 
    console.log('Server is running...');
});