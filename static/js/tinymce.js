var script= document.createElement('script');
script.type='text/javascript';
script.src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js";
document.head.appendChild(script);

script.onload=function(){
tinymce.init({
    selector: "textarea",
    height: 700,
    plugins: [
      "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
      "help", "image", "insertdatetime", "link", "lists", "media", 
      "preview", "searchreplace", "table", "visualblocks", "accordion", "autosave", "code", "codesample", "directionality", "emoticons", "fullscreen", "nonbreaking", "pagebreak", "preview", "save", "searchreplace", "table", "template", "visualblocks", "visualchars", "wordcount"
      ],
    toolbar: "undo redo link image accordion  styles  bold italic underline strikethrough  alignleft aligncenter alignright alignjustify indent outdent forecolor backcolor bullist numlist restoredraft charmap code codesample ltr rtl emoticons fullscreen insertdatetime media nonbreaking pagebreak preview save searchreplace table tabledelete  tableprops tablerowprops tablecellprops  tableinsertrowbefore tableinsertrowafter tabledeleterow  tableinsertcolbefore tableinsertcolafter tabledeletecol template visualblocks visualchars wordcount help",
    content_css: 'default'
    });
}