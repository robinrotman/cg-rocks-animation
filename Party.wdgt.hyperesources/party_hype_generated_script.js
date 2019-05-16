//	HYPE.documents["Party.wdgt"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Party.wdgt.hyperesources";
	var documentName = "Party.wdgt";
	var documentLoaderFilename = "party_hype_generated_script.js";
	var mainContainerID = "party_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"25":{n:"Candles_0000_Layer-2.png",p:1},"18":{n:"Hats-03.png",p:1},"10":{n:"Button_-17.png",p:1},"26":{n:"cadles-01.png",p:1},"19":{n:"Hats-06.png",p:1},"11":{n:"Button_CLEAR-1.png",p:1},"27":{n:"cadles-02.png",p:1},"0":{n:"RAW-01.png",p:1},"12":{n:"Hats-07.png",p:1},"1":{n:"RAW-09.png",p:1},"28":{n:"Button_-15.png",p:1},"20":{n:"RAW-08.png",p:1},"2":{n:"RAW-10.png",p:1},"13":{n:"Hats-02.png",p:1},"3":{n:"RAW-11.png",p:1},"21":{n:"Hats-01.png",p:1},"14":{n:"RAW-07.png",p:1},"4":{n:"RAW-12.png",p:1},"5":{n:"Button_-16.png",p:1},"15":{n:"Hats-05.png",p:1},"22":{n:"Hats-09.png",p:1},"6":{n:"Button_CLEAR.png",p:1},"23":{n:"RAW-04.png",p:1},"16":{n:"RAW-06.png",p:1},"7":{n:"RAW-02.png",p:1},"8":{n:"RAW-03.png",p:1},"24":{n:"Hats-04.png",p:1},"17":{n:"Hats-08.png",p:1},"9":{n:"RAW-05.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"13":{c:78,d:99,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:3,timelineIdentifier:"8"}],O:1,B:"#A0A0A0",z:"8",P:1,D:"#A0A0A0",C:"#A0A0A0",a:135,b:250},"3":{o:"content-box",h:"1",x:"visible",a:132,q:"100% 100%",b:251,j:"absolute",r:"inline",c:83,k:"div",z:"3",d:107,e:"0.000000"},"16":{o:"content-box",h:"6",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"1",transition:1}],k:"div",c:166,d:42,z:"11",aP:"pointer"},"11":{c:85,d:90,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:3,timelineIdentifier:"7"}],O:1,B:"#A0A0A0",z:"6",P:1,D:"#A0A0A0",C:"#A0A0A0",a:91,b:180},"4":{o:"content-box",h:"2",x:"visible",a:85,q:"100% 100%",b:308,j:"absolute",r:"inline",c:87,k:"div",z:"5",d:101,e:"0.000000"},"14":{c:78,d:90,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:3,timelineIdentifier:"9"}],O:1,B:"#A0A0A0",z:"9",P:1,D:"#A0A0A0",C:"#A0A0A0",a:90,b:312},"5":{o:"content-box",h:"3",x:"visible",a:72,q:"100% 100%",b:180,j:"absolute",r:"inline",c:106,k:"div",z:"2",d:108,e:"0.000000"},"12":{c:85,d:105,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:3,timelineIdentifier:"10"}],O:1,B:"#A0A0A0",z:"7",P:1,D:"#A0A0A0",C:"#A0A0A0",a:38,b:234},"6":{o:"content-box",h:"4",x:"visible",a:33,q:"100% 100%",b:234,j:"absolute",r:"inline",c:99,k:"div",z:"4",d:120,e:"0.000000"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:768},"15":{o:"content-box",h:"5",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"28",transition:1}],k:"div",c:166,d:42,z:"10",aP:"pointer"}},n:"Baloons",T:{"10":{d:1,i:"10",n:"y",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"6"}],f:30},"8":{d:1,i:"8",n:"p",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"3"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"9":{d:1,i:"9",n:"w",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"4"}],f:30},"7":{d:1,i:"7",n:"red",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"5"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"29":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"10",d:768},"37":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"33",transition:1}],O:1,B:"#A0A0A0",z:"12",P:1,D:"#A0A0A0",C:"#A0A0A0",a:382,b:221},"36":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"30",transition:1}],O:1,B:"#A0A0A0",z:"11",P:1,D:"#A0A0A0",C:"#A0A0A0",a:77,b:221},"38":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"34",transition:1}],O:1,B:"#A0A0A0",z:"13",P:1,D:"#A0A0A0",C:"#A0A0A0",a:682,b:221}},n:"Hats",T:{"10":{d:0,i:"10",n:"y",a:[],f:30},"8":{d:0,i:"8",n:"p",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"9":{d:0,i:"9",n:"w",a:[],f:30},"7":{d:0,i:"7",n:"red",a:[],f:30}},o:"28"},{x:2,p:"600px",c:"#FFFFFF",v:{"31":{o:"content-box",h:"8",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:768},"54":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"39",transition:1}],O:1,B:"#A0A0A0",z:"2",P:1,D:"#A0A0A0",C:"#A0A0A0",a:82,b:221},"57":{o:"content-box",h:"10",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"28",transition:1}],k:"div",c:166,d:42,z:"5",aP:"pointer"},"56":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"41",transition:1}],O:1,B:"#A0A0A0",z:"4",P:1,D:"#A0A0A0",C:"#A0A0A0",a:679,b:221},"55":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"40",transition:1}],O:1,B:"#A0A0A0",z:"3",P:1,D:"#A0A0A0",C:"#A0A0A0",a:382,b:221}},n:"Polka",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"30"},{x:3,p:"600px",c:"#FFFFFF",v:{"67":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"40",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"66":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget.html",V:"0",W:""},"68":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"69",transition:1}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Polka-Blue",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"40"},{x:4,p:"600px",c:"#FFFFFF",v:{"72":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"},"71":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"41",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"70":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-1.html",V:"0",W:""}},n:"Polka-red",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"41"},{x:5,p:"600px",c:"#FFFFFF",v:{"75":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"},"74":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"39",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"73":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-2.html",V:"0",W:""}},n:"Polka-Yellow",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"39"},{x:6,p:"600px",c:"#FFFFFF",v:{"58":{o:"content-box",h:"10",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"28"}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"62":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"47",transition:1}],O:1,B:"#A0A0A0",z:"5",P:1,D:"#A0A0A0",C:"#A0A0A0",a:679,b:221},"32":{o:"content-box",h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:768},"61":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"45",transition:1}],O:1,B:"#A0A0A0",z:"4",P:1,D:"#A0A0A0",C:"#A0A0A0",a:382,b:221},"60":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"43",transition:1}],O:1,B:"#A0A0A0",z:"3",P:1,D:"#A0A0A0",C:"#A0A0A0",a:82,b:221}},n:"Napkin",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"33"},{x:7,p:"600px",c:"#FFFFFF",v:{"80":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"43",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"79":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-3.html",V:"0",W:""},"81":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Napkin-Blue",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"43"},{x:8,p:"600px",c:"#FFFFFF",v:{"83":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"45",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"82":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-4.html",V:"0",W:""},"84":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Napkin-Orange",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"45"},{x:9,p:"600px",c:"#FFFFFF",v:{"86":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"47",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"85":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-5.html",V:"0",W:""},"87":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Napkin-Pink",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"47"},{x:10,p:"600px",c:"#FFFFFF",v:{"63":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"49",transition:1}],O:1,B:"#A0A0A0",z:"4",P:1,D:"#A0A0A0",C:"#A0A0A0",a:82,b:221},"88":{o:"content-box",h:"23",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"2",d:768},"65":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"53",transition:1}],O:1,B:"#A0A0A0",z:"6",P:1,D:"#A0A0A0",C:"#A0A0A0",a:679,b:221},"64":{c:257,d:357,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:1,sceneOid:"51",transition:1}],O:1,B:"#A0A0A0",z:"5",P:1,D:"#A0A0A0",C:"#A0A0A0",a:382,b:221},"59":{o:"content-box",h:"10",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"28"}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Stripe",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"34"},{x:11,p:"600px",c:"#FFFFFF",v:{"78":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"},"77":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"49",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"76":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-6.html",V:"0",W:""}},n:"Stripe-yellow",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"49"},{x:12,p:"600px",c:"#FFFFFF",v:{"89":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-7.html",V:"0",W:""},"90":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"51",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"91":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"}},n:"Stripe-blue",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"51"},{x:13,p:"600px",c:"#FFFFFF",v:{"97":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"69"}],k:"div",c:166,d:42,z:"3",aP:"pointer"},"96":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"53",transition:1}],k:"div",c:166,d:42,z:"2",aP:"pointer"},"95":{I:"None",J:"None",a:95,x:"visible",b:127,j:"absolute",K:"None",c:968,k:"div",z:"1",d:738,L:"None",U:"htmlwidget-8.html",V:"0",W:""}},n:"Stripe-red",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"53"},{x:14,p:"600px",c:"#FFFFFF",v:{"102":{o:"content-box",h:"11",p:"no-repeat",a:16,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"69",transition:1}],k:"div",c:166,d:42,z:"4",aP:"pointer"},"99":{o:"content-box",h:"26",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"2",d:768},"98":{o:"content-box",h:"25",x:"visible",a:512,q:"100% 100%",b:275,j:"absolute",r:"inline",c:25,k:"div",z:"1",d:46,e:"1.000000"},"103":{o:"content-box",h:"5",p:"no-repeat",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"104",transition:1}],k:"div",c:166,d:42,z:"5",aP:"pointer"},"101":{c:76,d:76,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:3,timelineIdentifier:"100"}],O:1,B:"#A0A0A0",z:"3",P:1,D:"#A0A0A0",C:"#A0A0A0",a:486,b:259}},n:"candles",T:{"100":{d:1,i:"100",n:"candle",a:[{f:"2",t:0,d:1,i:"e",e:"0.000000",s:"1.000000",o:"98"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"69"},{x:15,p:"600px",c:"#FFFFFF",v:{"105":{o:"content-box",h:"27",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1023.667100130039,k:"div",z:"1",d:768},"106":{o:"content-box",h:"28",a:842,x:"visible",q:"100% 100%",b:710,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:3}],k:"div",c:166,d:42,z:"2",aP:"pointer"}},n:"end",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"104"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

