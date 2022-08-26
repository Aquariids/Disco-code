import IPost from "../../../interface/IPost";

export interface ISidebarMenu {
    posts:IPost;
    slug: string,
    date:string,
    excerpt:string,
    title:string


}