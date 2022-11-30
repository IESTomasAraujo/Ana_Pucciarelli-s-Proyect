
window.Cliengo = {}; //all Cliengo configs, functions and params goes into this object

window.Cliengo.chatConfig = {
  "companyId" : "5e8dba66e4b0a3aba31aec67",
  "websiteId" : "5e8dba67e4b0a3aba31aec6a",
  "whiteLabelId" : "55df4ed3e4b0337744bcd65a",
  "whiteLabelName" : "",
  "googleAdWordsConversionId" : "",
  "googleAnalyticsId" : "",
  "chatbotName" : "Natalia",

    "phone" : "",
  "title": "http://alrasur.com.ar/",
  "businessHoursConfiguration" : {"enabled_channels":{"WHATSAPP":true,"CHATBOT":false},"business_hours":[{"start":28800,"end":68400},{"start":115200,"end":154800},{"start":201600,"end":241200},{"start":288000,"end":327600},{"start":374400,"end":414000},{"start":460800,"end":500400}],"initial_message":"Hola! en este momento nuestros agentes no se encuentran conectados, podes dejarnos tus datos y te contactarán a la brevedad.","time_zone":"-3:00","promise_future_contact":"Muchas gracias. Un asesor se comunicará contigo a la brevedad con la información que me has pasado.","final_salutation":"Bien, me contacto con el asesor y le doy toda esta información. Muchas gracias nuevamente  por comunicarte!"},
  "conversionPixels" : "",
  "customFeedbackImageUrl" : "",
  "widgetIcon" : "TWO_CHATS",
   "widgetStyle" : "ICON",
  "chatWindowColor" : "#5ba0d0",
  "cliengoMeetings" : "false",
  "chatWindowTitle" : "Chat de ventas",
  "chatWindowInputPlaceholder" : "Escribe un mensaje...",
  "chatInitialMessage" : "Hola, puedo ayudarte en algo?[[Autoahorro, Postventa, Consulta por Vehículo]]",
  "chatIsWritingMessage" : " está escribiendo...",
  "chatSaluteTimeInSeconds" : 5,
  "avatarImgUrl": "https://res.cloudinary.com/hbrrdozyj/image/upload/w_35,f_auto,q_auto/v1590620087/cliengo_chatbot_avatar/ycwrb56ohpmwwtc2bgyf.jpg",
  "labs":{
      },
  "companyLabs": "socketeer,mail_complete,data_no_request,wa_free_trial,stopchat,just_bubble",
  "planType": "CLIENGO_STARTER",
  "vertical": "AUTOMOTIVE",
    "formHooksEnabled" : false,
  "automaticRemarketingEnabled" : true,
  "chatEnabled" : false,
        "poweredBy":{
          "text": "Usamos Cliengo ",
          "link": "https://www.cliengo.com/?utm_source=usamos_cliengo&utm_medium=chat",
          "img":  "https://res.cloudinary.com/hbrrdozyj/image/upload/v1603736815/Usamos-Cliengo_knac91.png"
      },
    "customPoweredByUtms": "",
  "softDisable": false,
  "hasConvertedLead" : false,   "CDN_URL_DOMAIN" : "//d47r8x2gwo1do.cloudfront.net",
        "WS_CHATBOT_URL" : "wss://chatbot.cliengo.com",
      "sessionPath" : "/s/5e8dba66e4b0a3aba31aec67/5e8dba67e4b0a3aba31aec6a",
  "cacheVersion" : "1438-07062065",
  "debug" : false,
  "whatsAppActive": true,
  "lang" : "es_AR",
  "widgetVersion" : "2.0"
}


var host = 'https://lw.cliengo.com';

var mainClgoScriptId = 'mainclgo';
var mainWspScriptId = 'mainWsp';
var mainclgoScriptExists = document.querySelector('script[id="' + mainClgoScriptId + '"]');

loadMain();

function loadMain() {
  if(mainclgoScriptExists) {
    console.warn('Cuidado! ya existe un script con id "' + mainClgoScriptId + '", ' +
      'probablemente el script del chat este duplicado en ese sitio!');
  }

  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = mainClgoScriptId;
  s.src = host + '/mainclgo.bundle.js';
  s.setAttribute('data-company-id', '5e8dba66e4b0a3aba31aec67');
  s.setAttribute('data-source-id', '5e8dba67e4b0a3aba31aec6a');
  s.setAttribute('data-host', host);
  s.async = true;
  document.body.appendChild(s);
  console.debug('clgo loaded');

  loadWhatsAppWidget();
}

function onCommonsLoad() {
  console.log(commonsClgoScriptId + ' script loaded successfuly.');
  loadMain();
}

// WhatsApp functions
function setwhatsappConfig() {
      window.ldkWSP = {};
    ldkWSP.widget_color = "#128C7E";
    ldkWSP.widget_message = "Hablá con un Asesor";
    ldkWSP.conversionPixelHtml = "";
    ldkWSP.position = "";
    ldkWSP.phone = "+542314404127";
    ldkWSP.desktop_version = "EXTENDED";
    ldkWSP.lang = "es_AR";
    ldkWSP.businessHoursConfiguration = {"enabled_channels":{"WHATSAPP":true,"CHATBOT":false},"business_hours":[{"start":28800,"end":68400},{"start":115200,"end":154800},{"start":201600,"end":241200},{"start":288000,"end":327600},{"start":374400,"end":414000},{"start":460800,"end":500400}],"initial_message":"Hola! en este momento nuestros agentes no se encuentran conectados, podes dejarnos tus datos y te contactarán a la brevedad.","time_zone":"-3:00","promise_future_contact":"Muchas gracias. Un asesor se comunicará contigo a la brevedad con la información que me has pasado.","final_salutation":"Bien, me contacto con el asesor y le doy toda esta información. Muchas gracias nuevamente  por comunicarte!"},
    ldkWSP.company_id = "5e8dba66e4b0a3aba31aec67";
    ldkWSP.website_id = "5e8dba67e4b0a3aba31aec6a";
    ldkWSP.disable_powered_by = "" === "true";
    ldkWSP.custom_powered_by_utms = "";
    ldkWSP.googleAnalyticsId = "";
    ldkWSP.plan_type = "CLIENGO_STARTER";
    ldkWSP.website_id = "5e8dba67e4b0a3aba31aec6a";
    ldkWSP.show_desktop = true;
    ldkWSP.show_mobile = true;
    ldkWSP.labs = {
          };
    ldkWSP.notice = {
    "title": "Para comunicarte con un asesor necesitamos los siguientes datos",
    "type": "text"
};
    ldkWSP.name_request_message = {
    "title": "Nombre",
    "type": "text"
};
    ldkWSP.whats_app_request_message = {
    "title": "N\u00ba de WhatsApp",
    "type": "text"
};
    ldkWSP.message_request_message = {
    "title": "Mensaje",
    "type": "select",
    "options": [
        "0km.",
        "Autoahorro (No disponible)",
        "Postventa (No disponible)"
    ]
};
    ldkWSP.requestMessages = [
    {
        "title": "Mensaje",
        "type": "select",
        "options": [
            "0km.",
            "Autoahorro (No disponible)",
            "Postventa (No disponible)"
        ]
    }
];
  }

function loadWhatsAppWidget() {
      setwhatsappConfig();
    var wspHost = 'https://wb.cliengo.com';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = mainWspScriptId;
    s.src = wspHost + '/dist/js/mainWsp.js';
    s.setAttribute('data-company-id', '5e8dba66e4b0a3aba31aec67');
    s.setAttribute('data-source-id', '5e8dba67e4b0a3aba31aec6a');
    s.setAttribute('data-host', wspHost);
    s.async = true;
    document.body.appendChild(s);
  }


