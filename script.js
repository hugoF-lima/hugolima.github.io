//For some unknown cosmic reason, the order of appearance interferes with the end result, no idea why.
let homeLangContent = {
    "en": {
        "name": "Hugo Lima",
        "introduction": "Just another Educated/Self-taught IT enthusiast with an open mind to new languages lately. Below is a showcase of my projects. Feel free to tinker around and ask questions really.",
        "moreInfo": "( Click to Read more! )",
        "project1": "Local XML Reader",
        "project1desc": "An XML Reader with automated Invoice Emission, Excel Table handling and more...",
        "project2": "Kanji Quiz",
        "project2desc": "For the japanese learning enthusiasts. This quiz app groups Kanji according to the JLPT structure",
        "project3": "Book Store System",
        "project3desc": "A Book Store System for managing clients, employees and supplier registering/updating/deleting as well as sales and simple website feedback",
        "project4": "Car Sale System (W.i.P)",
        "project4desc": "A system for registering used cars for sale. ComboBoxes read from an SQLITE Database. (Still Incomplete)",
        "project5": "Outlook Extractor",
        "project5desc": "An Extractor for the outlook .msg files. Originally used for extracting pdf and xml files",
        "project6": "Recup ST Reader",
        "project6desc": "Invoice Automation Tool for updating values in an remote window",
        "project7": "JP Typer",
        "project7desc": "Another one for Japanese learning enthusiasts. This has the goal of helping you practice typing and memorizing jukugo reading. It's Still a work in progress and SRS is still under way.",
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
        "project2desc": "Para os entusiastas da lingua japonesa. Um quiz que agrupa os kanjis de acordo com a estrutura JLPT",
        "project3": "Extrator de Outlook",
        "project3desc": "Um extrator para os arquivos .msg do outlook. Originalmente usado para extrair arquivos pdf e xml",
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
        "xmlReaderDesc": "This was an xml reader with invoice emission and Excel table report used for managing XML archives and automating invoice emission. \n \n Primary Libraries used: \n \n -Openpyxl, Pyautogui, Pandas, xmltree and pyqt5 (formally tkinter) ",
        "xmlReaderRepo": "Link foda aqui",
        "xmlReaderVid": "Here's how the automated task of invoice emission occured: \n \n -If the user tried to select a non corresponding emitter, an error would appear (And the steps to correctly choose the right emitter). \n \n -The only reason the automated task was not faster, was because the invoice application had it's slowdowns, so a proper timing was kept in mind when writting the code.",
        "xmlReaderVidTwo": " \n -The invoice window could also be dragged (Given the top-left icon of the window was the coordinate reference for the other objects). \n \n -For managing the incoming invoices, the data could also be appended to an existing Excel Table (And the emitted notes could also be updated in the Excel records)",
        "xmlReaderVidThree": "\n - Bellow is how saving to Excel went about:",
        "kanjiQuizDesc": "For those interested in venturing through Kanji memorization (Yes, it is possible and the brain does get used to it). It's divided according with the JLPT scheme and, at the end of each section, a score percentage is given. Choices are randomly generated. TODO: Implement a non linear Kanji order (current order is fixed)",
        "kanjiQuizRepo": "Link foda aqui",
        "bookStoreDesc": "The more rounded of these projects. This was originally the 'Final Paper' of the technical computing course i took back in 2015. It revolved around Creating, Reading and Updating records for a Book Store, ranging from clients and employees to suppliers and books themselves.",
        "bookStoreDescTwo": "The project also included a web page with a 'Contact US' section, to which it's records were also read inside the system. The database was written on SQL Server. ",
        "bookStoreRepo": "Link foda aqui",
        "carSystemDesc": "A recent revisit and fresh-up on Java. This piece is still a work in progress, and features a window frame which registers car ads in a SQLITE Database. A front end for viewing the ads is still under development",
        "carSystemRepo": "Link foda aqui",
        "outlookDesc": "An extractor for the .msg files that Outlook generates when the user drags email selections into a File Explorer window. It was used for extracting pdf and xml files, but the source allows including multiple formats.",
        "outlookRepo": "Link foda aqui",
        "recupStDesc": "Another Automation Tool, This time around reading a json object into a frame window and, automating an invoice-record update (which at the time happened manually through software).",
        "recupStRepo": "Link foda aqui",
        "jpTyperDesc": "My first project with pyqt5 (pyside2 more specifically). For those inclined in learning the japanese language and practicing typing (with or without hiragana lookup). A score is kept on how many hiragana lookups the user does.",
        "jpTyperRepo": "Link foda aqui",
        "showcase": "Showcase:",
        "footernote": "© 2023 Hugo Lima. All rights reserved.",
    }
}

let AboutLangContent = {
    //about me
    "en": {
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
        "contactMeHeaderTwo": "About me",
        "myWorkHeaderTwo": "My Work",
        "thanksToHeaderTwo": "Thanks to...",
        "thanksTo": `
        I would like mostly to thank my university colleagues for encouraging me to bring this portfolio forth.
        Despite me being very modest, they told this was the best way companies could better know my skills.

        I would also like to thank Evana for helping me with the japanese translation"
    `,
    },
    "pt-br": {
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
        "contactMeHeaderTwo": "Sobre Mim",
        "myWorkHeaderTwo": "Meu trabalho",
        "thanksToHeaderTwo": "Agradecimentos...",
        "thanksTo": `
        Gostaria de agradecer aos meus colegas de universidade por me encorajarem a produzir esse portfolio, Apesar da minha modestia, 
        Eles me disseram que assim seria uma melhor maneira de permitir que os profissionais do mercado conheçam meu trabalho.
        
        ~~Gostaria de agradecer a minha amiga Evana Michilotti por me ajudar com a tradução em japonês desse portfolio.~~"
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

function switchLang(lang, dictLang) {
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

    /* function openImage(index) {
        // Show the lightbox overlay and content
        lightboxOverlay.style.display = "block";

        // Set the src attribute of the lightbox image
        lightboxImage.src = lightboxImages[index].src;

        // Now, use the showSlide function from the higher scope
        showSlide(lightboxImages, index);
    } */
    function openImage(index) {
        // Show the lightbox overlay and content
        lightboxOverlay.style.display = "block";

        // Set the src attribute of the lightbox image
        lightboxImage.src = lightboxImages[index].src;

        // Calculate the position for the lightbox content
        const contentWidth = lightboxContent.offsetWidth;
        const contentHeight = lightboxContent.offsetHeight;
        const leftPosition = (window.innerWidth - contentWidth) / 2 + "px";
        const topPosition = (window.innerHeight - contentHeight) / 2 + "px";

        // Apply the calculated position
        lightboxContent.style.left = leftPosition;
        lightboxContent.style.top = topPosition;

        // Now, use the showSlide function from the higher scope
        showSlide(lightboxImages, index);
    }


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