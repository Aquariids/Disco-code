import { ADVANCED_JS, ALGORITHMS_JS, BASIC_JS, BASIC_NEXT_JS, BASIC_REACT, BASIC_TS, JS, NEXT_JS, PRACTICE_JS, REACT, TS, UNDER_THE_HOOD_JS } from "../../../pages/api/pages";
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


export {mapJs, mapReact,mapTs,mapNextJs};