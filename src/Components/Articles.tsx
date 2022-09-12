import s from './Articles.module.css';
import Card from './Card/Card';
const Articles = () => {


    return <div className={s.articles}>
    <Card text={'JavaScript'} color={'js'} url={'/js'}/>
    <Card text={'React'} color={'react'} url={'/react'}/>
    <Card text={'TypeScript'} color={'ts'} url={'/ts'}/>
    <Card text={'Next.js'} color={'next'} url={'/next'}/>



    </div>;


};

export default Articles;