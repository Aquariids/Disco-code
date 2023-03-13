import { ADVANCED_JS, ALGORITHMS_JS, BASIC_JS, BASIC_NEXT_JS, BASIC_NODE_JS, BASIC_REACT, BASIC_TS, HTML, HTML_CSS, JS, NEXT_JS, NODE_JS, OTHER, PARADIGMS, PARADIGMS_STYLE, PRACTICE_JS, REACT, TS, UNDER_THE_HOOD_JS, WEB } from "../../../pages/api/pages";
import { mapProps } from "./Breadcrumbs.props";


const mapJs:mapProps[] = [
    {href2: `/content/${JS}`, href1: `/content/${JS}/${BASIC_JS}`, title: 'Базовый JavaScript', category: BASIC_JS,},
    {href2: `/content/${JS}`, href1: `/content/${JS}/${ADVANCED_JS}`, title: 'Продвинутый JavaScript', category: ADVANCED_JS },
    {href2: `/content/${JS}`, href1: `/content/${JS}/${ALGORITHMS_JS}`, title: 'Алгоритмы', category: ALGORITHMS_JS },
    {href2: `/content/${JS}`, href1: `/content/${JS}/${PRACTICE_JS}`, title: 'Практика & webpack', category: PRACTICE_JS},
    {href2: `/content/${JS}`, href1: `/content/${JS}/${UNDER_THE_HOOD_JS}`, title: 'JavaScript под капотом', category: UNDER_THE_HOOD_JS },
    // { href:'/content/js/interview-js', title:'Базовый JavaScript', category:'interview-js'},

];

const mapReact:mapProps[] = [
    { href2: `/content/${REACT}`, href1: `/content/${REACT}/${BASIC_REACT}`, title: 'Базовый React', category: BASIC_REACT },
    // { href:'/content/react/interview-react', title:'Собеседование', category:'interview-react'},

];

const mapTs:mapProps[] = [
    {href2: `/content/${TS}`, href1: `/content/${TS}/${BASIC_TS}`, title: 'Основы typeScript', category: BASIC_TS },

];

const mapNextJs:mapProps[] = [
    { href2: `/content/${NEXT_JS}`, href1: `/content/${NEXT_JS}/${BASIC_NEXT_JS}`, title: 'Основы next.js', category: BASIC_NEXT_JS},

];

const mapNodeJs:mapProps[] = [
    { href2: `/content/${NODE_JS}`, href1: `/content/${NODE_JS}/${BASIC_NODE_JS}`, title: 'Базовый node.js', category: BASIC_NODE_JS},

];

const mapParadigms:mapProps[] = [
    { href2: `/content/${PARADIGMS}`, href1: `/content/${PARADIGMS}/${PARADIGMS_STYLE}`, title: 'Стили написания', category: PARADIGMS_STYLE},

];

const mapHtmlCss:mapProps[] = [
    { href2: `/content/${HTML_CSS}`, href1: `/content/${HTML_CSS}/${HTML}`, title: 'Html', category: HTML},

];
const mapOther:mapProps[] = [
    { href2: `/content`, href1: `/content`, title: 'Web', category: WEB},

];





export {mapJs, mapReact,mapTs, mapNextJs, mapNodeJs, mapParadigms,mapOther,mapHtmlCss};