import Link from 'next/link';
import s from './Articles.module.css';
import Card from './Card/Card';
const Articles = () => {


    return <div className={s.articles}>
                    <Card text={'JavaScript'} color={'yellow'} url={'/js'}/>
    <Card text={'JavaScript'} color={'yellow'} url={'/js'}/>
    <Card text={'JavaScript'} color={'yellow'} url={'/js'}/>
    <Card text={'TypeScript'} color={'blue'} url={'/ts'}/>

    </div>;


};

export default Articles;