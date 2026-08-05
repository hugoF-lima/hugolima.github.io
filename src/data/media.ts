// Import all images
import xmlReader1 from '../media/images/image1_xmlreader.png';
import xmlReader2 from '../media/images/image2_xmlreader.png';
import xmlReader3 from '../media/images/image3_xmlreader.png';

import ankiweaver1 from '../media/images/ankiweaver-main_interface.jpg';
import ankiweaver2 from '../media/images/ankiweaver-import-cards.png';
import ankiweaver3 from '../media/images/ankiweaver-bulk-actions.png';
import ankiweaver4 from '../media/images/ankiweaver-settings.jpg';


import kanjiQuiz1 from '../media/images/image1_kanjiquiz.png';
import kanjiQuiz2 from '../media/images/image2_kanjiquiz.png';
import kanjiQuiz3 from '../media/images/image3_kanjiquiz.jpg';

import bookStore1 from '../media/images/02-Tela Principal (aba vendas).png';
import bookStore2 from '../media/images/18-Pedido_Info.png';
import bookStore3 from '../media/images/01-Login.png';
import bookStore4 from '../media/images/03-Tela Principal (aba Cliente).png';
import bookStore5 from '../media/images/04-Tela Principal (aba Funcionario).png';
import bookStore6 from '../media/images/05-Tela Principal (aba Cargo).png';
import bookStore7 from '../media/images/06-Tela Principal (aba Fornecedor).png';
import bookStore8 from '../media/images/07-Tela Principal (aba Livros).png';
import bookStore9 from '../media/images/08-Tela Principal (aba Contatos Online).png';
import bookStore10 from '../media/images/09-Cadastro_Cliente.png';
import bookStore11 from '../media/images/10-RelatorioCliente.png';
import bookStore12 from '../media/images/11-Cadastro_Funcionario.png';
import bookStore13 from '../media/images/12-RelatorioFuncionario.png';
import bookStore14 from '../media/images/13-Cadastro_Cargo.png';
import bookStore15 from '../media/images/14-Cadastro_Fornecedor.png';
import bookStore16 from '../media/images/15-RelatorioFornecedor.png';
import bookStore17 from '../media/images/16-Cadastro_Livro.png';
import bookStore18 from '../media/images/17-ContatoInfo.png';
import bookStore19 from '../media/images/19-CupomVenda.png';

import natsuMatsuri1 from '../media/images/natsu-matsuri-site-1.png';
import natsuMatsuri2 from '../media/images/natsu-matsuri-site-2.png';
import natsuMatsuri3 from '../media/images/natsu-matsuri-site-3.png';

import outlook1 from '../media/images/image1_outlook_extractor.png';
import outlook2 from '../media/images/image2_outlook_extractor.png';

import recupSt1 from '../media/images/image1_recup_st_reader.jpg';
import recupSt2 from '../media/images/image2_recup_st_reader.jpg';

import jpTyper1 from '../media/images/image1_jp_typer.jpg';
import jpTyper2 from '../media/images/image2_jp_typer.jpg';
import jpTyper3 from '../media/images/image3_jp_typer.jpg';
import jpTyper5 from '../media/images/image5_jp_typer.jpg';

import enade1 from '../media/images/simulado00-Site.png';
import enade2 from '../media/images/simulado00a-Site.png';
import enade3 from '../media/images/simulado01-Enunciado.png';
import enade4 from '../media/images/simulado02-Alternativas_e_Botões.png';
import enade5 from '../media/images/simulado03-Estatisticas.png';
import enade6 from '../media/images/simulado04-Resultado.png';
import enade7 from '../media/images/simulado05-Gabarito.png';

// Import all videos
import xmlReaderVid1 from '../media/videos/Emissão Automática_Local_xml_reader.mp4';
import xmlReaderVid2 from '../media/videos/salvando anexos xml no excel.mp4';
import outlookVid from '../media/videos/emissão automatica -salvando anexos do outlook-.mp4';
import recupStVid from '../media/videos/Recup_ST_Automate.mp4';

// Import all resumes
import resumePtBr from '../media/resume/Curriculum Vitae Hugo Freitas (2026) - Adm.pdf';
import resumeEn from '../media/resume/Curriculum Vitae Hugo Freitas (2026) - Adm - En.pdf';
import resumeJp from '../media/resume/履歴書　ー Hugo Lima (2026).pdf';

export const media = {
  images: {
    xmlReader: [xmlReader1, xmlReader2, xmlReader3],
    ankiWeaver: [ankiweaver1, ankiweaver2, ankiweaver3, ankiweaver4],
    kanjiQuiz: [kanjiQuiz1, kanjiQuiz2, kanjiQuiz3],
    bookStore: [
      bookStore1, bookStore2, bookStore3, bookStore4, bookStore5,
      bookStore6, bookStore7, bookStore8, bookStore9, bookStore10,
      bookStore11, bookStore12, bookStore13, bookStore14, bookStore15,
      bookStore16, bookStore17, bookStore18, bookStore19
    ],
    natsuMatsuri: [natsuMatsuri1, natsuMatsuri2, natsuMatsuri3],
    outlook: [outlook1, outlook2],
    recupSt: [recupSt1, recupSt2],
    jpTyper: [jpTyper1, jpTyper2, jpTyper3, jpTyper5],
    enade: [enade1, enade2, enade3, enade4, enade5, enade6, enade7],
  },
  videos: {
    xmlReader: [xmlReaderVid1, xmlReaderVid2],
    outlook: [outlookVid],
    recupSt: [recupStVid],
  },
  resumes: {
    'pt-BR': resumePtBr,
    'en': resumeEn,
    'jp': resumeJp
  }
};
