//For some unknown cosmic reason, the order of appearance interferes with the end result, no idea why.
let homeLangContent = {
    "en": {
        "name": "Hugo Lima",
        "introduction": "Just another Educated/Self-taught IT enthusiast with an open mind to new languages lately. Below is a showcase of my projects. Feel free to tinker around and ask questions really.",
        "moreInfo": "( Click to Read more! )",
        "project1": "Local XML Reader",
        "project1desc": "An XML Reader with automated Invoice Emission, Excel Table handling and more...",
        "project2": "Kanji Quiz",
        "project2desc": "For the japanese learning enthusiasts. This quiz app groups Kanji according to the JLPT structure.",
        "project3": "Book Store System",
        "project3desc": "A Book Store System for managing clients, employees and supplier registering/updating/deleting as well as sales and simple website feedback.",
        "project4": "Car Sale System (W.i.P)",
        "project4desc": "A system for registering used cars for sale. ComboBoxes read from an SQLITE Database. (Still Incomplete).",
        "project5": "Outlook Extractor",
        "project5desc": "An Extractor for the outlook .msg files. Originally used for extracting pdf and xml files.",
        "project6": "Recup ST Reader",
        "project6desc": "Invoice Automation Tool for updating values in an remote window.",
        "project7": "JP Typer",
        "project7desc": "Another one for Japanese learning enthusiasts. This has the goal of helping you practice typing and memorizing jukugo reading. It's Still a work in progress and SRS is still under way.",
        "project8": "Enade Mockup Test",
        "project8desc": "A website project which contains a mockup exam from a rather popular brazillian university evaluation exam, the 'Enade test' ",
        "footernote": "© 2023 Hugo Lima. All rights reserved.",
    },
    "pt-br": {
        "name": "Hugo Lima",
        "footernote": "© 2023 Hugo Lima. Todos direitos reservados.",
        "introduction": "Só mais um entusiasta de T.I com um misto de autodidatismo e formação tecnica. Abaixo seguem meus projetos, fiquem a vontade para explorar ou tirar duvidas.",
        "moreInfo": "( Veja mais sobre meu perfil! )",
        "project1": "Leitor de XML",
        "project1desc": "Um leitor de XML com emissão automatizada de notas, gerência em Excel e mais...",
        "project2": "Kanji Quiz",
        "project2desc": "Para os entusiastas da lingua japonesa. Um quiz que agrupa os kanjis de acordo com a estrutura JLPT.",
        "project3": "Sistema Livraria",
        "project3desc": "Um sistema de livraria para gerenciar cadastro/atualização/exclusão de clientes, funcionários e fornecedores, assim como visualização do 'Fale conosco' de uma pagina web.",
        "project4": "Sistema de anuncio de carros (Em Progresso...)",
        "project4desc": "Um sistema para cadastrar veículos usados para venda. As ComboBoxes leem a partir de uma base do SQLITE. (Ainda incompleto).",
        "project5": "Outlook Extractor",
        "project5desc": "Um extrator para arquivos .msg do Outlook. Foi usado para extrair arquivos pdf e xml.",
        "project6": "Recup ST Reader",
        "project6desc": "Ferramenta de automação para preenchimento de dados de nota fiscais.",
        "project7": "JP Typer",
        "project7desc": "Outra ferramenta para entusiastas da lingua japonesa. A finalidade é treinar digitação em japonês e memorizar jukugo. Ainda está em andamento e, um sistema de repetição espaçada segue em desenvolvimento.",
        "project8": "Simulado Enade",
        "project8desc": "Um Projeto Web a qual contem um simulado de um teste conhecido, o 'teste Enade'",
        "footernote": "© 2023 Hugo Lima. Todos direitos reservados.",
    },
    "jp": {
        "name": "リーマヒューゴ",
        "footernote": "© 2023 リーマヒューゴ. 全ての権利を有する。",
        "introduction": "独学と学校教育の両方IT開発者です。プログラミングプロジェクトをこちらへ",
        "moreInfo": "詳細はこちら！",
        "project1": "XML Reader",
        "project1desc": "自動インボイス発行のXML Readerです。Excelテーブルの管理",
        "project2": "漢字クイズ",
        "project2desc": "日本語学習者の漢字クイズ。漢字分割の方法はJLPTの仕方",
        "project3": "Outlook Extractor",
        "project3desc": "まだまだ作るのです",
    }
}

let ProjectDescrContent = {
    "en": {
        "moreInfo": "This portfolio is still under construction...",
        "xmlReaderTitle": "XML Reader",
        "xmlReaderDesc": "This was an xml reader with invoice emission and Excel table report used for managing XML archives and automating invoice emission. \n \n Primary Libraries used: \n \n -Openpyxl, Pyautogui, Pandas, xmltree and pyqt5 (formally tkinter) ",
        "xmlReaderRepo": "https://github.com/hugoF-lima/local_xml_reader/",
        "xmlReaderVid": "Here's how the automated task of invoice emission occured: \n \n -If the user tried to select a non corresponding emitter, an error would appear (And the steps to correctly choose the right emitter). \n \n -The emission process read each xml field accordingly and filled it's data in the invoice emitter. \n \n -The only reason the automated task was not faster, was because the invoice application had it's slowdowns, so a proper timing was kept in mind when writting the code.",
        "xmlReaderVidTwo": " \n (Given the potentially sensitive information, this video was blurred as of now). \n (Still, through the blur is yet noticeable that an automatic filling is going on) \n \n -The invoice window could also be dragged (Given the top-left icon of the window was the coordinate reference for the other objects). \n \n -For managing the incoming invoices, the data could also be appended to an existing Excel Table (And the emitted notes could also be updated in the Excel records, through the 'invoice report module')",
        "xmlReaderVidThree": "\n - Bellow is how saving to Excel went about:",
        "kanjiQuizDesc": "For those interested in venturing through Kanji memorization (Yes, it is possible and the brain does get used to it). It's divided according with the JLPT scheme and, at the end of each section, a score percentage is given. Choices are randomly generated. \n \n TODO: Implement a non linear Kanji order (current order is fixed)",
        "kanjiQuizRepo": "https://github.com/hugoF-lima/tkinter_kanji_quiz/",
        "bookStoreTitle": "Book Store System",
        "bookStoreDesc": "The more rounded of these projects. This was originally the 'Final Paper' of the technical computing course i took back in 2015. It revolved around Creating, Reading and Updating records for a Book Store, ranging from clients and employees to suppliers and books themselves.",
        "bookStoreDescTwo": "The project also included a web page with a 'Contact US' section, to which it's records were also read inside the system. The database was written on SQL Server. \n\n To run this application SQL Server needs to be installed, and the databases created (An sql file is on the github repository). ",
        "bookStoreRepo": "https://github.com/hugoF-lima/book_store_system",
        "carSystemTitle": "Car Ad System (Work in Progress)",
        "carSystemDesc": "A recent revisit and fresh-up on Java. This piece is still a work in progress, and features a window frame which registers car ads in a SQLITE Database. A front end for viewing the ads is still under development",
        "carSystemRepo": "https://github.com/hugoF-lima/car_ads_system",
        "outlookTitle": "Outlook Extractor",
        "outlookDesc": "An extractor for the .msg files that Outlook generates when the user drags email selections into a File Explorer window. It was used for extracting pdf and xml files, but the source allows including multiple formats.",
        "outlookRepo": "https://github.com/hugoF-lima/outlook_extractor",
        "outlookVid": "Here's how the .msg archives were extracted: \n \n -Attachments could be selected at once, with no need for manually downloading each per email.",
        "recupStTitle": "Recup ST Automate",
        "recupStDesc": "Another Automation Tool, This time around reading a json object into a frame window and, automating an invoice-record update (which at the time happened manually through software).",
        "recupStRepo": "https://github.com/hugoF-lima/recup_st_reader",
        "recupStVid": "Here's how the automation mainly occured. \n \n The inner logic allowed for looking up random values in the .json if the selected number on the application was random. \n \n -Over 400 invoices with 15 records each, could be updated weekly.",
        "jpTyperDesc": "My first project with pyqt5 (pyside2 more specifically). For those inclined in learning the japanese language and practicing typing (with or without hiragana lookup). A score is kept on how many hiragana lookups the user does.",
        "jpTyperRepo": "https://github.com/hugoF-lima/pyside2_jp_typer",
        "enadeSimuladoTitle": "Enade Mockup Exam",
        "enadeDesc": "Project originally intended for the University's first term 'Web Programming' subject. Made with vanilla HTML, CSS and JS. \n\n Besides myself, credits for Afirma!KCS (https://github.com/KauaCaze-Fatec), Arthur Guerra (https://github.com/arthurguerraa) and other small collaborators. \n\n The mockup test can be accessed here (pt-br only): https://pmi-p1.vercel.app/",
        "enadeRepo": "https://github.com/KauaCaze-Fatec/PMI-P1-Grupo1",
        "showcase": "Showcase:",
        "footernote": "© 2023 Hugo Lima. All rights reserved.",
    },
    "pt-br": {
        "moreInfo": "Esse Portfolio ainda segue em construção...",
        "xmlReaderTitle": "Leitor XML",
        "xmlReaderDesc": "Este foi um Leitor de XML que incorporava emissão automática de notas fiscais e controle em uma tabela Excel. \n \n Modulos principais: \n \n -Openpyxl, Pyautogui, Pandas, xmltree and pyqt5 (formally tkinter) ",
        "xmlReaderRepo": "https://github.com/hugoF-lima/local_xml_reader/",
        "xmlReaderVid": "Abaixo segue como a tarefa de emissão automática ocorria: \n \n -Se o usuário selecionasse um emissor não correspondente á janela, um erro apareceria (E os passos para selecionar o emissor correto). \n \n -A emissão em seguida lia os campos presentes em cada XML e realizava o preenchimento nas areas da janela do emissor. \n \n -O unico motivo a qual a tarefa automatizada não era mais rapido, foi devido as oscilações do emissor, logo um intervalo adequado foi definido durante o desenvolvimento.",
        "xmlReaderVidTwo": " (Visto as informações potencialmente sensíveis, o video sofreu um efeito de blur por hora) \n (Ainda assim, por meio do blur ainda é possível notar que um preenchimento automático está ocorrendo). \n \n -A janela do emissor podia ser arrastada (Considerando que o ícone na parte superior-esquerda foi utilizado como referêncial de coordenadas para os demais elementos). \n \n -Para lidar com a demanda de notas fiscais, As informações podem ser adicionadas a uma tabela existente de Excel (E as saídas emitidas tambem poderiam ser atualizadas por coleta de dados no modulo fiscal do emissor).",
        "xmlReaderVidThree": "\n - Abaixo como ocorria a inserção no Excel:",
        "kanjiQuizDesc": "Para aqueles interessados em memorização de Kanji (Sim, isso é possível e o cerebro humano acostuma). É dividido conforme o esquema JLPT, E no final de cada sessão, uma porcentagem de acertos é mostrada. Multiplas escolhas sempre são sortidas. \n \n Pendente: Implementar ordem não linear de aparição dos kanjis (ordem atual é fixa)",
        "kanjiQuizRepo": "https://github.com/hugoF-lima/tkinter_kanji_quiz/",
        "bookStoreTitle": "Sistema Livraria",
        "bookStoreDesc": "O mais completo desses projetos. Originalmente foi o 'TCC' do curso tecnico de informática que fiz em 2015. Se tratava de Criar, Ler, Atualizar e Deletar(Exclusão lógica) registros para uma Livraria, partindo de clientes e funcionarios para to fornecedores e os livros em si.",
        "bookStoreDescTwo": "O projeto tambem incluiu uma pagina web com uma seção de 'Fale Conosco', a qual seus registros eram lidos via software. O banco de dados foi desenvolvido em SQL. \n\n Para rodar esse sistema, é necessário ter SQL Server instalado e o banco criado. (Há um arquivo .sql no repositorio do github).",
        "bookStoreRepo": "https://github.com/hugoF-lima/book_store_system",
        "carSystemDesc": "Uma revisita em Java. Este projeto ainda está em andamento, e até o momento exibe uma janela que permite o cadastro de automóvel para venda em uma base de dados SQLITE. A front end para visualizar os anuncios ainda segue em andamento.",
        "carSystemRepo": "https://github.com/hugoF-lima/car_ads_system",
        "outlookTitle": "Extrator Outlook",
        "outlookDesc": "Um extrator para arquivos .msg que o Outlook gera quando o usuário arrasta os anexos para uma janela do Explorador. Foi usado para extrair arquivos pdf e xml, mas a fonte permite multiplos formatos.",
        "outlookRepo": "https://github.com/hugoF-lima/outlook_extractor",
        "outlookVid": "Abaixo segue como ocorria a extração dos arquivos msg: \n\n Os anexos podiam ser selecionados e extraídos de uma unica vez, sem a necessidade de ir abrindo os anexos um a um.",
        "recupStTitle": "Recup ST Automate",
        "recupStDesc": "Outra ferramenta de automação, Dessa vez lendo um arquivo objeto .json em uma janela, e automatizando a atualização de registros no emissor de notas (Que até o momento ocorria manualmente).",
        "recupStRepo": "https://github.com/hugoF-lima/recup_st_reader",
        "recupStVid": "Abaixo segue como a automação ocorria. \n \n A lógica interna permitia que valores selecionados no emissor fossem automaticamente referenciados no .json, independente da ordem. \n \n -Por volta de 400 notas com 15 itens cada, podiam ser feitas semanalmente",
        "jpTyperDesc": "Meu primeiro projeto com Pyqt5(pyside2 mais especificamente). Para aqueles aprendendo a lingua japonesa praticarem digitação e memorização dos jukugo (com ou sem consulta ao hiragana). Um placar é mantido entre quantos acertos ocorrem com ou sem consulta aos hiraganas.",
        "jpTyperRepo": "https://github.com/hugoF-lima/pyside2_jp_typer/",
        "enadeSimuladoTitle": "Simulado Enade",
        "enadeDesc": "Trabalho originalmente feito em grupo para a materia de Programação Web no primeiro ciclo de ADS. Feito puramente com HTML, CSS e JS. \n\n Alem de mim, creditos para Afirma!KCS (https://github.com/KauaCaze-Fatec), Arthur Guerra (https://github.com/arthurguerraa) e os demais integrantes. \n\n O simulado pode ser acessado aqui: https://pmi-p1.vercel.app/",
        "enadeRepo": "https://github.com/hugoF-lima/PMI-P1/tree/main",
        "showcase": "Demonstração:",
        "footernote": "© 2023 Hugo Lima. Todos direitos reservados.",
    }
}

let AboutLangContent = {
    //about me
    "en": {
        "moreInfo": "This portfolio is still under construction...",
        "aboutMeTitle": "About Me",
        "aboutMeTitleTwo": "Overview",
        "aboutMe": `
        Hugo Freitas F. Lima, I'm a 25-year-old self-taught/formally educated individual in the field of computing.
        I've recently enrolled in an associate's degree at the Brazilian university of Fatec. My area of study is 
        Information Technology, more specifically, Systems Development Analyst.

        I started programming like most people, around school and technical courses. I was first introduced to C, 
        but things really took off when I learned Java and SQL for the purpose of developing a bookstore system. 
        This system handled book sales, client, employee, books, and supplier registering/updating/deleting, 
        as well as a brief website that talked about the company and had a 'Contact Us' section.

        Despite some hiatus, years later I decided to go back to programming, this time around in a 
        self-taught approach. I learned Python, and after some tutorial madness, I embarked on another set of 
        'hands-on projects' that caught my initiative. Most projects being showcased here revolve around 
        automating tasks and making things more user-friendly.

        I've taken a liking to learning a third language (Japanese), and as a result, some of the projects 
        revolve around this initiative.
    `,
        "myWork": `
        Some people ask how i'm able to build things on my own, I've always tell them that habit is the king of small achievements, and that object orientation is at it's core, the act of building and incrementing upon cook recipes. (I'm aware that good developers avoid recycling code, with that in mind however, one of my goals is to better understand algorithms.) Most of my work is on a state of "Work in Progress", you can check it here! 
    `,
        "contactMe": `
        Professional mail: hugolima720@protonmail.com
        College email: hugo.lima7@fatec.sp.gov.br
        Github: https://github.com/hugoF-lima 
        Linkedin profile: https://www.linkedin.com/in/hugo-lima-240ab6209/
    `,
        "contactMeHeaderTwo": "Contact Me!",
        "myWorkHeaderTwo": "My Work",
        "thanksToHeaderTwo": "Thanks to...",
        "thanksTo": `
        I would like mostly to thank my university colleagues for encouraging me to bring this portfolio forth.
        Despite me being very modest, they told this was the best way companies could better know my skills.
    `,
        "footernote": "© 2023 Hugo Lima. All Rights Reserved.",
    },
    "pt-br": {
        "moreInfo": "Este Portfolio ainda está em construção...",
        "aboutMeTitle": "Sobre mim",
        "aboutMeTitleTwo": "Overview",
        "aboutMe": `
        Hugo Freitas F. Lima, Tenho 25 anos e sou um individuo de formação tecnica e aprendizado autodidata na área da computação. Recentemente estou cursando Análise e Desenvolvimento de Sistemas na Fatec. 
        Eu comecei na programação como a maioria, através do ensino tecnico, Inicialmente fui introduzido á linguagem C, porem meu envolvimento apenas decolou quando fui aprendendo Java e SQL com a finalidade de construir um sistema de Cadastro e Vendas de uma livraria. No sistema se gerenciavam clientes, funcionários, fornecedores, livros e até mesmo o "fale conosco" de uma interface web.
        Apesar de um hiato, anos mais tarde retornei a programação, dessa vez em uma dinâmica autodidata. Aprendi Python e, depois de tutoriais sem fim, decidi "aprender na prática" através de um conjunto de projetos que cativaram minha iniciativa. A maioria dos projetos aqui presentes envolvem automação de tarefas e facilidade ao usuário.
        Adquiri o habito de aprender uma terceira lingua (japonês), e como resultado, alguns projetos abrangem essa iniciativa.
    `,
        "myWork": `
        Algumas pessoas me perguntam como consigo criar por conta, sempre as digo que habito é a chave de qualquer avanço, e que orientação á objetos é em sua essência, o ato de construir e incrementar em cima de "receitas de bolo". (Tenho ciência de que bons desenvolvedores evitam reciclar código, e com isso em mente, um dos meus futuros objetivos é melhor compreender algoritmos).
        A maioria do meu trabalho ainda segue em progresso, você pode conferir aqui!
    `,
        "contactMe": `
        Email profissional: hugolima720@protonmail.com
        Email de colégio: hugo.lima7@fatec.sp.gov.br
        Github: https://github.com/hugoF-lima 
        Linkedin profile: https://www.linkedin.com/in/hugo-lima-240ab6209/
    `,
        "contactMeHeaderTwo": "Contato!",
        "myWorkHeaderTwo": "Meu trabalho",
        "thanksToHeaderTwo": "Agradecimentos...",
        "thanksTo": `
        Gostaria de agradecer aos meus colegas de universidade por me encorajarem a produzir esse portfolio, Apesar da minha modestia, 
        Eles me disseram que assim seria uma melhor maneira de permitir que os profissionais do mercado conheçam meu trabalho.
        `,
    }
}
/* function switchLang(lang, dictLang) {
    for (let key in dictLang[lang]) {
        console.log("Updating element with ID:", key);
        document.getElementById(key).innerHTML = dictLang[lang][key];
    }
} */

/* function switchLang(lang, dictLang) {
    const langData = dictLang[lang];
    if (langData) {
        for (let key in langData) {
            console.log("Updating element with ID:", key);
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = langData[key];
            } else {
                console.warn("Element with ID", key, "not found.");
            }
        }
    } else {
        console.warn("Language data for", lang, "not found.");
    }
} */

/* function switchLang(lang, dictLang) {
    const langData = dictLang[lang];
    if (langData) {
        for (let key in langData) {
            console.log("Updating element with ID:", key);
            const element = document.getElementById(key);
            if (element) {
                // Replace '\n' with '<br>' for line breaks
                const contentWithLineBreaks = langData[key].replace(/\n/g, '<br>');
                element.innerHTML = contentWithLineBreaks;
            } else {
                console.warn("Element with ID", key, "not found.");
            }
        }
    } else {
        console.warn("Language data for", lang, "not found.");
    }
} */

function returnLangPreference() {
    languagePreference = localStorage.getItem("languagePreference");
    console.log("Yo", languagePreference);
    return languagePreference;
}

function switchLang(lang, dictLang) {
    localStorage.setItem("languagePreference", localStorage.getItem("languagePreference") ? lang : 'en');
    /* const langData = dictLang[lang]; */
    const langData = dictLang[localStorage.getItem("languagePreference") ? returnLangPreference() : 'en'];
    /* localStorage.removeItem("languagePreference"); */
    if (langData) {
        for (let key in langData) {
            console.log("Updating element with ID:", key);
            const element = document.getElementById(key);
            if (element) {
                // Replace '\n' with '<br>' for line breaks
                const contentWithLineBreaks = langData[key].replace(/\n/g, '<br>');

                // Find URLs in the text and wrap them in <a> tags
                const contentWithLinks = contentWithLineBreaks.replace(
                    /(https?:\/\/[^\s]+)/g,
                    '<a href="$1" target="_blank">$1</a>'
                );

                element.innerHTML = contentWithLinks;
            } else {
                console.warn("Element with ID", key, "not found.");
            }
        }
    } else {
        console.warn("Language data for", lang, "not found.");
    }
}



function openProjectPage(url) {
    window.location.href = url;
}

function showSlide(images, index) {
    images.forEach((image, i) => {
        if (i === index) {
            // Fade in the selected image
            image.style.display = "block";
            setTimeout(() => {
                image.style.opacity = 1;
            }, 50); // Delay the fade-in to give time for display:block to take effect
        } else {
            // Fade out other images
            image.style.opacity = 0;
            image.style.display = "none";
        }
    });
}

function initializeSlideImages() {
    const slideshowContainers = document.querySelectorAll(".slideshow");

    slideshowContainers.forEach(container => {
        const images = container.querySelectorAll("img");
        const buttons = container.querySelectorAll(".slide-button");

        let currentSlide = 0;

        /* function showSlide(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    // Fade in the selected image
                    image.style.display = "block";
                    setTimeout(() => {
                        image.style.opacity = 1;
                    }, 50); // Delay the fade-in to give time for display:block to take effect
                } else {
                    // Fade out other images
                    image.style.opacity = 0;
                    image.style.display = "none";
                }
            });
        }

        function openImage(index) {
            showSlide(index);
        }*/
        function openImage(index) {
            showSlide(images, index);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % images.length;
            openImage(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + images.length) % images.length;
            openImage(currentSlide);
        }

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const index = parseInt(button.getAttribute("data-index"));
                openImage(index);
            });
        });

        showSlide(images, currentSlide);
    });
}

function intializeLightBoxImages() {
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxContent = document.getElementById("lightbox-content");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");
    const slideshowContainers = document.querySelectorAll(".slideshow");
    const lightboxImages = document.querySelectorAll(".lightbox-image");

    function openImage(index) {
        // Show the lightbox overlay and content
        lightboxOverlay.style.display = "block";

        // Set the src attribute of the lightbox image
        lightboxImage.src = lightboxImages[index].src;

        // Now, use the showSlide function from the higher scope
        showSlide(lightboxImages, index);
    }
    /* function openImage(index) {
        // Show the lightbox overlay and content
        lightboxOverlay.style.display = "block";

        // Set the src attribute of the lightbox image
        lightboxImage.src = lightboxImages[index].src;

        // Calculate the position for the lightbox content
        const contentWidth = lightboxContent.offsetWidth;
        console.log(contentWidth)
        const contentHeight = lightboxContent.offsetHeight;
        console.log(contentHeight)
        const leftPosition = (window.innerWidth - contentWidth) / 1.5 + "px";

        // Calculate the top position, including scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const topPosition = (window.innerHeight - contentHeight) / 0.9 + scrollTop + "px";

        // Apply the calculated positions
        lightboxContent.style.left = leftPosition;
        lightboxContent.style.top = topPosition;

        // Now, use the showSlide function from the higher scope
        showSlide(lightboxImages, index);
    } */



    function closeLightbox() {
        // Hide the lightbox overlay and content
        lightboxOverlay.style.display = "none";
    }

    // Attach onclick event listeners to each lightbox image
    lightboxImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            openImage(index);
        });
    });

    lightboxClose.addEventListener("click", () => {
        closeLightbox();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initializeSlideImages();
});

document.addEventListener("DOMContentLoaded", function () {
    intializeLightBoxImages();
});

// Function to show the tooltip
function showTooltip() {
    const button = document.getElementById('jpbutton');
    button.setAttribute('title', '準備中... \n In Progress... \n Em Progresso...');
}

// Function to hide the tooltip
function hideTooltip() {
    const button = document.getElementById('jpbutton');
    button.removeAttribute('title');
}

// Add event listeners to show the tooltip on button click
const button = document.getElementById('jpbutton');
button.addEventListener('click', showTooltip);
button.addEventListener('blur', hideTooltip);
