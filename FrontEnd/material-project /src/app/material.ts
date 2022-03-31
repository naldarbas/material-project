
export class Material
{
      id:number;
      monitorDate:string;
      language:string;
      section:string;
      url:string;
      author:string;
      attachments:string;
      title:string;
      content:string;

      constructor
      (
            id?:number,
            monitorDate?:string,
            language?:string,
            section?:string,
            url?:string,
            author?:string,
            attachments?:string,
            title?:string,
            content?:string
       )
            {
                  // this.id = id ? id :0,
                  // this.monitorDate = monitorDate ?  monitorDate:'',
                  // this.language = language ? language:'',
                  // this.section = section ?  section :'',
                  // this.url = url ? url : '',
                  // this.author = author ? author : '',
                  // this.attachments = attachments ? attachments : '',
                  // this.title = title ?  title : '',
                  // this.content = content ? content : ''
            } 

      
}