
function showTinypicPlugin() {
	var el = document.getElementById('tinypic_plugin_' + id);
	el.style.display = '';
	if (el.src != '') {
		return;
	}

	var width = 265;
	var height = 275;
	curl = '';
	ctxt = '';

	if (typeof(tinypic_layout) == 'undefined') {
		tinypic_layout = 'narrow';
	}
	else {
		if (tinypic_layout == 'wide')
		{
			width = 480;
			height = 450;
		}
	}

	if (typeof(tinypic_type) == 'undefined')
		tinypic_type = 'both';
	if (typeof(tinypic_links) == 'undefined')
		tinypic_links = 'html';
	if (typeof(tinypic_language) == 'undefined')
		tinypic_language = 'en';
	if (typeof(tinypic_search) == 'undefined')
		tinypic_search = 'true';


	el.setAttribute('height', height);
	el.setAttribute('width', width);
	el.setAttribute('scrolling','no');

	var tpurl = "http://plugin.tinypic.com/plugin/index.php?popts=l,"+tinypic_layout+"|t,"+tinypic_type+"|c,"+tinypic_links+"|i,"+tinypic_language+"|s,"+tinypic_search;
	if (curl)
		tpurl += curl;
	if (ctxt)
		tpurl += ctxt;

	el.src = tpurl;
}

function hideTinypicPlugin() {
	var el = document.getElementById('tinypic_plugin_' + id);
	el.style.display = 'none';
}

var id = 50
document.write("<center><iframe id = 'tinypic_plugin_" + id + "' frameborder = '0' style = 'display:none;' scrolling='no'></iframe><br/>");