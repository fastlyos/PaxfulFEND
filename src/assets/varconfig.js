var host = window.location.hostname;
export var BackendHost;
if(host == '192.168.2.174'){
	BackendHost = "http://"+host+":3800/";
} else {
	BackendHost = "http://"+host+":3800/";
}