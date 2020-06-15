//Languages: liste de textes (could be in a separate JSON file)
let language = {
	en: { //English
		ts_home: "Home", ts_projects: "Projects", ts_lang: "Language", ts_lang2: "English", ts_lang3: "French",
	},
	fr: { //Français
		ts_home: "Accueil", ts_projects: "Projets", ts_lang: "Langue", ts_lang2: "Anglais", ts_lang3: "Français",
	}
};

//Changes elements text without overwriting the child elements
function setTextContents($elem, text) {
	$elem.contents().filter(function() {
		if (this.nodeType == Node.TEXT_NODE) {
			this.nodeValue = text;
		}
	});
}
	
function changeLanguage(lang, boolean){
	//Changer la langue du contenu
  //alert("changeLanguage(" + lang + ")");

	if (lang == "en") //Switch to english
	{
		//alert("Should become english");
		$("#ts_home").text(language.en.ts_home);
		$("#ts_projects").text(language.en.ts_projects);
		$("#ts_lang").text(language.en.ts_lang);
		$("#ts_lang2").text(language.en.ts_lang2);
		$("#ts_lang3").text(language.en.ts_lang3);

		if(window.location.pathname.indexOf("index") != -1)
		{
			$("#ts_textAbout1").text(language.en.ts_textAbout1);
			$("#ts_textAbout2").text(language.en.ts_textAbout2);
			
			$("#ts_title_diplomas").text(language.en.ts_title_diplomas);
			setTextContents($("#ts_diplome"), language.en.ts_diplome);
			setTextContents($("#ts_inProgress"), language.en.ts_inProgress);
			setTextContents($("#ts_dec1"), language.en.ts_dec1);
			setTextContents($("#ts_school1"), language.en.ts_school1);
			setTextContents($("#ts_studies"), language.en.ts_studies);
			setTextContents($("#ts_dec2"), language.en.ts_dec2);
			setTextContents($("#ts_school2"), language.en.ts_school2);
			setTextContents($("#ts_sup"), language.en.ts_sup);
			setTextContents($("#ts_sub"), language.en.ts_sub);
			setTextContents($("#ts_years"), language.en.ts_years);
			$("#ts_progTitle").text(language.en.ts_progTitle);
			$("#ts_webDev").text(language.en.ts_webDev);
			$("#ts_btnContact").text(language.en.ts_btnContact);
		}
		else if(window.location.pathname.indexOf("projects") != -1)
		{
			$(".ts_buy").attr("value", language.en.ts_buy);
			$(".ts_buy").attr("title", language.en.ts_buy);
			$(".ts_details").attr("value", language.en.ts_details);
			$(".ts_details").attr("title", language.en.ts_details);
			$("#ts_pjt1_title").text(language.en.ts_pjt1_title);
			$("#ts_pjt1_preview").text(language.en.ts_pjt1_preview);
			$("#ts_pjt2_title").text(language.en.ts_pjt2_title);
			$("#ts_pjt2_preview").text(language.en.ts_pjt2_preview);
		}
		else if(window.location.pathname.indexOf("thanks") != -1)
		{
			$("#ts_thanks_main").text(language.en.ts_thanks_main);
		}
		else if(window.location.pathname.indexOf("404") != -1)
		{
			$("#ts_404_main").text(language.en.ts_404_main);
		}
	}
	else if (lang == "fr") //Switch to french
	{
		//alert("Should become french");
		$("#ts_home").text(language.fr.ts_home);
		$("#ts_projects").text(language.fr.ts_projects);
		$("#ts_lang").text(language.fr.ts_lang);
		$("#ts_lang2").text(language.fr.ts_lang2);
		$("#ts_lang3").text(language.fr.ts_lang3);

		if(window.location.pathname.indexOf("index") != -1)
		{
			$("#ts_textAbout1").text(language.fr.ts_textAbout1);
			$("#ts_textAbout2").text(language.fr.ts_textAbout2);
			
			$("#ts_title_diplomas").text(language.fr.ts_title_diplomas);
			setTextContents($("#ts_diplome"), language.fr.ts_diplome);
			setTextContents($("#ts_inProgress"), language.fr.ts_inProgress);
			setTextContents($("#ts_dec1"), language.fr.ts_dec1);
			setTextContents($("#ts_school1"), language.fr.ts_school1);
			setTextContents($("#ts_studies"), language.fr.ts_studies);
			setTextContents($("#ts_dec2"), language.fr.ts_dec2);
			setTextContents($("#ts_school2"), language.fr.ts_school2);
			setTextContents($("#ts_sup"), language.fr.ts_sup);
			setTextContents($("#ts_sub"), language.fr.ts_sub);
			setTextContents($("#ts_sub"), language.fr.ts_sub);
			setTextContents($("#ts_years"), language.fr.ts_years);
			$("#ts_progTitle").text(language.fr.ts_progTitle);
			$("#ts_webDev").text(language.fr.ts_webDev);
			$("#ts_btnContact").text(language.fr.ts_btnContact);
		}
		else if(window.location.pathname.indexOf("projects") != -1)
		{
			$(".ts_buy").attr("value", language.fr.ts_buy);
			$(".ts_buy").attr("title", language.fr.ts_buy);
			$(".ts_details").attr("value", language.fr.ts_details);
			$(".ts_details").attr("title", language.fr.ts_details);
			$("#ts_pjt1_title").text(language.fr.ts_pjt1_title);
			$("#ts_pjt1_preview").text(language.fr.ts_pjt1_preview);
			$("#ts_pjt2_title").text(language.fr.ts_pjt2_title);
			$("#ts_pjt2_preview").text(language.fr.ts_pjt2_preview);
		}
		else if(window.location.pathname.indexOf("thanks") != -1)
		{
			$("#ts_thanks_main").text(language.fr.ts_thanks_main);
		}
		else if(window.location.pathname.indexOf("404") != -1)
		{
			$("#ts_404_main").text(language.fr.ts_404_main);
		}
	}

	//Ajuster les href des liens
    /*let count = 0;
	$("#navPages").find("a").each(function(){ //"li>a:first-child").each(function(i){
        //alert("adding a href in html");
        if(count < 3)
        {
            let href = $(this).attr("href");
            let hrefArray = href.split("#");
            $(this).attr("href", hrefArray[0] + "#" + lang);
            count++;
        }
        else
            return;
    });*/

	//Montrer la page maintenant que la langue est modifiée (si la page vient d'être chargée)
    if(boolean)
	    $("html").toggleClass("invisible");
}

//Après le chargement de la page
$("document").ready(function() {
    //alert("page loaded");
    //Détecter le langage au chargement de la page
    if(localStorage.getItem("lang") == null)
    {
        //alert("localStorage var is null");
        localStorage.setItem("lang", "en"); //Set to english by default
        changeLanguage("en", true);
    }
    else
    {
        if(localStorage.getItem("lang") == "en")
            changeLanguage("en", true);
        else if(localStorage.getItem("lang") == "fr")
            changeLanguage("fr", true);
        else
        {
            //Unknown language, set back to english
            localStorage.setItem("lang", "en"); //Set to english by default
            changeLanguage("fr", true);
        }
    }
    //Charger la langue avant tout selon le # dans le URL au chargement de la page
    /*if(window.location.hash.indexOf("#en") != -1)
        changeLanguage("en", true);
    else if(window.location.hash.indexOf("#fr") != -1) //window.location.hash.includes("#fr")
        changeLanguage("fr", true);
    else
        $("html").toggleClass("invisible");*/

	//Lorsqu'on decide de changer la langue
    let allLinks = $("[data-reload]");
    allLinks.on('click', function(e) {
        //alert("J'ai cliqué sur : " + $(this).text() + "\nà l’index : " + $(this).index());
        /*if($(this).text() == "English" || $(this).text() == "Anglais")
            localStorage.setItem("lang", "en");
        else if($(this).text() == "French" || $(this).text() == "Français")
            localStorage.setItem("lang", "fr");
        else //Unknow language, set to english
            localStorage.setItem("lang", "en");*/
        if($(this).index() == 0) //Set to english
            localStorage.setItem("lang", "en");
        else if($(this).index() == 1)//Set to french
            localStorage.setItem("lang", "fr");
        else //Unknow language, set to english
            localStorage.setItem("lang", "en");

        changeLanguage(localStorage.getItem("lang"), false); 
        /*let lang = $("#ts_lang").text();
        if(lang == "Français") //Go english
            changeLanguage("en", false);
        if(lang == "English") //Go french
            changeLanguage("fr", false);*/
    });

	//Scroll back up button
	let btn = $('#scrollUpBtn');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

});