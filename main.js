 /* Import TinyMCE */
 import tinymce from 'tinymce';

 /* Default icons are required for TinyMCE 5.3 or above */
 import 'tinymce/icons/default';
 import 'tinymce/models/dom/model';


 /* A theme is also required */
 import 'tinymce/themes/silver';

 /* Import the skin */
 import 'tinymce/skins/ui/oxide/skin.css';

 /* Import plugins */

import 'tinymce/models/dom/model';
import 'tinymce/plugins/preview'
import 'tinymce/plugins/importcss'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/save'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/code'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/image'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/link'
import 'tinymce/plugins/media'
import 'tinymce/plugins/template'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/table'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/help'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis.js';

 /* Import content css */
 import contentUiCss from 'tinymce/skins/ui/oxide/content.css';
 import contentCss from 'tinymce/skins/content/default/content.css';

 /* Initialize TinyMCE */

   tinymce.init({
     selector: '#tinymce',
      plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
      toolbar: 'bold italic | bullist numlist | link emoticons',
     skin: 'tinymce-5-dark',
     content_css: false,
     content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
   });