import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { bodyFont } from '../utils/fonts'

const resetStyles = `
  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}

  /* Algolia */
  .searchbox{display:inline-block;position:relative;width:200px;height:32px!important;white-space:nowrap;box-sizing:border-box;visibility:visible!important}.searchbox .algolia-autocomplete{display:block;width:100%;height:100%}.searchbox__wrapper{width:100%;height:100%;z-index:1;position:relative}.searchbox__input{display:inline-block;box-sizing:border-box;-webkit-transition:box-shadow .4s ease,background .4s ease;transition:box-shadow .4s ease,background .4s ease;border:0;border-radius:16px;box-shadow:inset 0 0 0 1px #ccc;background:#fff!important;padding:0;padding-right:26px;padding-left:32px;width:100%;height:100%;vertical-align:middle;white-space:normal;font-size:12px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbox__input::-webkit-search-cancel-button,.searchbox__input::-webkit-search-decoration,.searchbox__input::-webkit-search-results-button,.searchbox__input::-webkit-search-results-decoration{display:none}.searchbox__input:hover{box-shadow:inset 0 0 0 1px #b3b3b3}.searchbox__input:active,.searchbox__input:focus{outline:0;box-shadow:inset 0 0 0 1px #aaa;background:#fff}.searchbox__input::-webkit-input-placeholder{color:#aaa}.searchbox__input::-moz-placeholder{color:#aaa}.searchbox__input:-ms-input-placeholder{color:#aaa}.searchbox__input::placeholder{color:#aaa}.searchbox__submit{position:absolute;top:0;margin:0;border:0;border-radius:16px 0 0 16px;background-color:rgba(69,142,225,0);padding:0;width:32px;height:100%;vertical-align:middle;text-align:center;font-size:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;right:inherit;left:0}.searchbox__submit:before{display:inline-block;margin-right:-4px;height:100%;vertical-align:middle;content:""}.searchbox__submit:active,.searchbox__submit:hover{cursor:pointer}.searchbox__submit:focus{outline:0}.searchbox__submit svg{width:14px;height:14px;vertical-align:middle;fill:#6d7e96}.searchbox__reset{display:block;position:absolute;top:8px;right:8px;margin:0;border:0;background:none;cursor:pointer;padding:0;font-size:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;fill:rgba(0,0,0,.5)}.searchbox__reset.hide{display:none}.searchbox__reset:focus{outline:0}.searchbox__reset svg{display:block;margin:4px;width:8px;height:8px}.searchbox__input:valid~.searchbox__reset{display:block;-webkit-animation-name:a;animation-name:a;-webkit-animation-duration:.15s;animation-duration:.15s}@-webkit-keyframes a{0%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:0}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes a{0%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:0}to{-webkit-transform:none;transform:none;opacity:1}}.algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu{right:0!important;left:inherit!important}.algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu:before{right:48px}.algolia-autocomplete.algolia-autocomplete-left .ds-dropdown-menu{left:0!important;right:inherit!important}.algolia-autocomplete.algolia-autocomplete-left .ds-dropdown-menu:before{left:48px}.algolia-autocomplete .ds-dropdown-menu{top:-6px;border-radius:4px;margin:6px 0 0;padding:0;text-align:left;height:auto;position:relative;background:transparent;border:none;z-index:1;max-width:600px;min-width:500px;box-shadow:0 1px 0 0 rgba(0,0,0,.2),0 2px 3px 0 rgba(0,0,0,.1)}.algolia-autocomplete .ds-dropdown-menu:before{display:block;position:absolute;content:"";width:14px;height:14px;background:#fff;z-index:2;top:-7px;border-top:1px solid #d9d9d9;border-right:1px solid #d9d9d9;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:2px}.algolia-autocomplete .ds-dropdown-menu .ds-suggestions{position:relative;z-index:2;margin-top:8px}.algolia-autocomplete .ds-dropdown-menu .ds-suggestion{cursor:pointer}.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion.suggestion-layout-simple,.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content{background-color:rgba(69,142,225,.05)}.algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-]{position:relative;border:1px solid #d9d9d9;background:#fff;border-radius:4px;overflow:auto;padding:0 8px 8px}.algolia-autocomplete .ds-dropdown-menu *{box-sizing:border-box}.algolia-autocomplete .algolia-docsearch-suggestion{position:relative;padding:0 8px;background:#fff;color:#02060c;overflow:hidden}.algolia-autocomplete .algolia-docsearch-suggestion--highlight{color:#174d8c;background:rgba(143,187,237,.1);padding:.1em .05em}.algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl0 .algolia-docsearch-suggestion--highlight,.algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl1 .algolia-docsearch-suggestion--highlight{color:inherit;background:inherit}.algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight{padding:0 0 1px;background:inherit;box-shadow:inset 0 -2px 0 0 rgba(69,142,225,.8);color:inherit}.algolia-autocomplete .algolia-docsearch-suggestion--content{display:block;float:right;width:70%;position:relative;padding:5.33333px 0 5.33333px 10.66667px;cursor:pointer}.algolia-autocomplete .algolia-docsearch-suggestion--content:before{content:"";position:absolute;display:block;top:0;height:100%;width:1px;background:#ddd;left:-1px}.algolia-autocomplete .algolia-docsearch-suggestion--category-header{position:relative;border-bottom:1px solid #ddd;display:none;margin-top:8px;padding:4px 0;font-size:1em;color:#33363d}.algolia-autocomplete .algolia-docsearch-suggestion--wrapper{width:100%;float:left;padding:8px 0 0}.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column{float:left;width:30%;display:none;padding-left:0;text-align:right;position:relative;padding:5.33333px 10.66667px;color:#a4a7ae;font-size:.9em;word-wrap:break-word}.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column:before{content:"";position:absolute;display:block;top:0;height:100%;width:1px;background:#ddd;right:0}.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column .algolia-docsearch-suggestion--highlight{background-color:inherit;color:inherit}.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-inline{display:none}.algolia-autocomplete .algolia-docsearch-suggestion--title{margin-bottom:4px;color:#02060c;font-size:.9em;font-weight:700}.algolia-autocomplete .algolia-docsearch-suggestion--text{display:block;line-height:1.2em;font-size:.85em;color:#63676d}.algolia-autocomplete .algolia-docsearch-suggestion--no-results{width:100%;padding:8px 0;text-align:center;font-size:1.2em}.algolia-autocomplete .algolia-docsearch-suggestion--no-results:before{display:none}.algolia-autocomplete .algolia-docsearch-suggestion code{padding:1px 5px;font-size:90%;border:none;color:#222;background-color:#ebebeb;border-radius:3px;font-family:Menlo,Monaco,Consolas,Courier New,monospace}.algolia-autocomplete .algolia-docsearch-suggestion code .algolia-docsearch-suggestion--highlight{background:none}.algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__main .algolia-docsearch-suggestion--category-header,.algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__secondary .algolia-docsearch-suggestion--subcategory-column{display:block}.algolia-autocomplete .suggestion-layout-simple.algolia-docsearch-suggestion{border-bottom:1px solid #eee;padding:8px;margin:0}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--content{width:100%;padding:0}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--content:before{display:none}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--category-header{margin:0;padding:0;display:block;width:100%;border:none}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--category-header-lvl0,.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--category-header-lvl1{opacity:.6;font-size:.85em}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--category-header-lvl1:before{background-image:url('data:image/svg+xml;utf8,<svg width="10" height="10" viewBox="0 0 20 38" xmlns="http://www.w3.org/2000/svg"><path d="M1.49 4.31l14 16.126.002-2.624-14 16.074-1.314 1.51 3.017 2.626 1.313-1.508 14-16.075 1.142-1.313-1.14-1.313-14-16.125L3.2.18.18 2.8l1.31 1.51z" fill-rule="evenodd" fill="%231D3657" /></svg>');content:"";width:10px;height:10px;display:inline-block}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--wrapper{width:100%;float:left;margin:0;padding:0}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--duplicate-content,.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--subcategory-column,.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--subcategory-inline{display:none!important}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--title{margin:0;color:#458ee1;font-size:.9em;font-weight:400}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--title:before{content:"#";font-weight:700;color:#458ee1;display:inline-block}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--text{margin:4px 0 0;display:block;line-height:1.4em;padding:5.33333px 8px;background:#f8f8f8;font-size:.85em;opacity:.8}.algolia-autocomplete .suggestion-layout-simple .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight{color:#3f4145;font-weight:700;box-shadow:none}.algolia-autocomplete .algolia-docsearch-footer{width:110px;height:20px;z-index:3;margin-top:10.66667px;float:right;font-size:0;line-height:0}.algolia-autocomplete .algolia-docsearch-footer--logo{background-image:url("data:image/svg+xml;utf8,<svg viewBox='0 0 130 18' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient x1='-36.868%' y1='134.936%' x2='129.432%' y2='-27.7%' id='a'><stop stop-color='%2300AEFF' offset='0%'/><stop stop-color='%233369E7' offset='100%'/></linearGradient></defs><g fill='none' fill-rule='evenodd'><path d='M59.399.022h13.299a2.372 2.372 0 0 1 2.377 2.364V15.62a2.372 2.372 0 0 1-2.377 2.364H59.399a2.372 2.372 0 0 1-2.377-2.364V2.381A2.368 2.368 0 0 1 59.399.022z' fill='url(%23a)'/><path d='M66.257 4.56c-2.815 0-5.1 2.272-5.1 5.078 0 2.806 2.284 5.072 5.1 5.072 2.815 0 5.1-2.272 5.1-5.078 0-2.806-2.279-5.072-5.1-5.072zm0 8.652c-1.983 0-3.593-1.602-3.593-3.574 0-1.972 1.61-3.574 3.593-3.574 1.983 0 3.593 1.602 3.593 3.574a3.582 3.582 0 0 1-3.593 3.574zm0-6.418v2.664c0 .076.082.131.153.093l2.377-1.226c.055-.027.071-.093.044-.147a2.96 2.96 0 0 0-2.465-1.487c-.055 0-.11.044-.11.104l.001-.001zm-3.33-1.956l-.312-.311a.783.783 0 0 0-1.106 0l-.372.37a.773.773 0 0 0 0 1.101l.307.305c.049.049.121.038.164-.011.181-.245.378-.479.597-.697.225-.223.455-.42.707-.599.055-.033.06-.109.016-.158h-.001zm5.001-.806v-.616a.781.781 0 0 0-.783-.779h-1.824a.78.78 0 0 0-.783.779v.632c0 .071.066.12.137.104a5.736 5.736 0 0 1 1.588-.223c.52 0 1.035.071 1.534.207a.106.106 0 0 0 .131-.104z' fill='%23FFF'/><path d='M102.162 13.762c0 1.455-.372 2.517-1.123 3.193-.75.676-1.895 1.013-3.44 1.013-.564 0-1.736-.109-2.673-.316l.345-1.689c.783.163 1.819.207 2.361.207.86 0 1.473-.174 1.84-.523.367-.349.548-.866.548-1.553v-.349a6.374 6.374 0 0 1-.838.316 4.151 4.151 0 0 1-1.194.158 4.515 4.515 0 0 1-1.616-.278 3.385 3.385 0 0 1-1.254-.817 3.744 3.744 0 0 1-.811-1.351c-.192-.539-.29-1.504-.29-2.212 0-.665.104-1.498.307-2.054a3.925 3.925 0 0 1 .904-1.433 4.124 4.124 0 0 1 1.441-.926 5.31 5.31 0 0 1 1.945-.365c.696 0 1.337.087 1.961.191a15.86 15.86 0 0 1 1.588.332v8.456h-.001zm-5.954-4.206c0 .893.197 1.885.592 2.299.394.414.904.621 1.528.621.34 0 .663-.049.964-.142a2.75 2.75 0 0 0 .734-.332v-5.29a8.531 8.531 0 0 0-1.413-.18c-.778-.022-1.369.294-1.786.801-.411.507-.619 1.395-.619 2.223zm16.12 0c0 .719-.104 1.264-.318 1.858a4.389 4.389 0 0 1-.904 1.52c-.389.42-.854.746-1.402.975-.548.229-1.391.36-1.813.36-.422-.005-1.26-.125-1.802-.36a4.088 4.088 0 0 1-1.397-.975 4.486 4.486 0 0 1-.909-1.52 5.037 5.037 0 0 1-.329-1.858c0-.719.099-1.411.318-1.999.219-.588.526-1.09.92-1.509.394-.42.865-.741 1.402-.97a4.547 4.547 0 0 1 1.786-.338 4.69 4.69 0 0 1 1.791.338c.548.229 1.019.55 1.402.97.389.42.69.921.909 1.509.23.588.345 1.28.345 1.999h.001zm-2.191.005c0-.921-.203-1.689-.597-2.223-.394-.539-.948-.806-1.654-.806-.707 0-1.26.267-1.654.806-.394.539-.586 1.302-.586 2.223 0 .932.197 1.558.592 2.098.394.545.948.812 1.654.812.707 0 1.26-.272 1.654-.812.394-.545.592-1.166.592-2.098h-.001zm6.962 4.707c-3.511.016-3.511-2.822-3.511-3.274L113.583.926l2.142-.338v10.003c0 .256 0 1.88 1.375 1.885v1.792h-.001zm3.774 0h-2.153V5.072l2.153-.338v9.534zm-1.079-10.542c.718 0 1.304-.578 1.304-1.291 0-.714-.581-1.291-1.304-1.291-.723 0-1.304.578-1.304 1.291 0 .714.586 1.291 1.304 1.291zm6.431 1.013c.707 0 1.304.087 1.786.262.482.174.871.42 1.156.73.285.311.488.735.608 1.182.126.447.186.937.186 1.476v5.481a25.24 25.24 0 0 1-1.495.251c-.668.098-1.419.147-2.251.147a6.829 6.829 0 0 1-1.517-.158 3.213 3.213 0 0 1-1.178-.507 2.455 2.455 0 0 1-.761-.904c-.181-.37-.274-.893-.274-1.438 0-.523.104-.855.307-1.215.208-.36.487-.654.838-.883a3.609 3.609 0 0 1 1.227-.49 7.073 7.073 0 0 1 2.202-.103c.263.027.537.076.833.147v-.349c0-.245-.027-.479-.088-.697a1.486 1.486 0 0 0-.307-.583c-.148-.169-.34-.3-.581-.392a2.536 2.536 0 0 0-.915-.163c-.493 0-.942.06-1.353.131-.411.071-.75.153-1.008.245l-.257-1.749c.268-.093.668-.185 1.183-.278a9.335 9.335 0 0 1 1.66-.142l-.001-.001zm.181 7.731c.657 0 1.145-.038 1.484-.104v-2.168a5.097 5.097 0 0 0-1.978-.104c-.241.033-.46.098-.652.191a1.167 1.167 0 0 0-.466.392c-.121.169-.175.267-.175.523 0 .501.175.79.493.981.323.196.75.289 1.293.289h.001zM84.109 4.794c.707 0 1.304.087 1.786.262.482.174.871.42 1.156.73.29.316.487.735.608 1.182.126.447.186.937.186 1.476v5.481a25.24 25.24 0 0 1-1.495.251c-.668.098-1.419.147-2.251.147a6.829 6.829 0 0 1-1.517-.158 3.213 3.213 0 0 1-1.178-.507 2.455 2.455 0 0 1-.761-.904c-.181-.37-.274-.893-.274-1.438 0-.523.104-.855.307-1.215.208-.36.487-.654.838-.883a3.609 3.609 0 0 1 1.227-.49 7.073 7.073 0 0 1 2.202-.103c.257.027.537.076.833.147v-.349c0-.245-.027-.479-.088-.697a1.486 1.486 0 0 0-.307-.583c-.148-.169-.34-.3-.581-.392a2.536 2.536 0 0 0-.915-.163c-.493 0-.942.06-1.353.131-.411.071-.75.153-1.008.245l-.257-1.749c.268-.093.668-.185 1.183-.278a8.89 8.89 0 0 1 1.66-.142l-.001-.001zm.186 7.736c.657 0 1.145-.038 1.484-.104v-2.168a5.097 5.097 0 0 0-1.978-.104c-.241.033-.46.098-.652.191a1.167 1.167 0 0 0-.466.392c-.121.169-.175.267-.175.523 0 .501.175.79.493.981.318.191.75.289 1.293.289h.001zm8.682 1.738c-3.511.016-3.511-2.822-3.511-3.274L89.461.926l2.142-.338v10.003c0 .256 0 1.88 1.375 1.885v1.792h-.001z' fill='%23182359'/><path d='M5.027 11.025c0 .698-.252 1.246-.757 1.644-.505.397-1.201.596-2.089.596-.888 0-1.615-.138-2.181-.414v-1.214c.358.168.739.301 1.141.397.403.097.778.145 1.125.145.508 0 .884-.097 1.125-.29a.945.945 0 0 0 .363-.779.978.978 0 0 0-.333-.747c-.222-.204-.68-.446-1.375-.725-.716-.29-1.221-.621-1.515-.994-.294-.372-.44-.82-.44-1.343 0-.655.233-1.171.698-1.547.466-.376 1.09-.564 1.875-.564.752 0 1.5.165 2.245.494l-.408 1.047c-.698-.294-1.321-.44-1.869-.44-.415 0-.73.09-.945.271a.89.89 0 0 0-.322.717c0 .204.043.379.129.524.086.145.227.282.424.411.197.129.551.299 1.063.51.577.24.999.464 1.268.671.269.208.466.442.591.704.125.261.188.569.188.924l-.001.002zm3.98 2.24c-.924 0-1.646-.269-2.167-.808-.521-.539-.782-1.281-.782-2.226 0-.97.242-1.733.725-2.288.483-.555 1.148-.833 1.993-.833.784 0 1.404.238 1.858.714.455.476.682 1.132.682 1.966v.682H7.357c.018.577.174 1.02.467 1.329.294.31.707.465 1.241.465.351 0 .678-.033.98-.099a5.1 5.1 0 0 0 .975-.33v1.026a3.865 3.865 0 0 1-.935.312 5.723 5.723 0 0 1-1.08.091l.002-.001zm-.231-5.199c-.401 0-.722.127-.964.381s-.386.625-.432 1.112h2.696c-.007-.491-.125-.862-.354-1.115-.229-.252-.544-.379-.945-.379l-.001.001zm7.692 5.092l-.252-.827h-.043c-.286.362-.575.608-.865.739-.29.131-.662.196-1.117.196-.584 0-1.039-.158-1.367-.473-.328-.315-.491-.761-.491-1.337 0-.612.227-1.074.682-1.386.455-.312 1.148-.482 2.079-.51l1.026-.032v-.317c0-.38-.089-.663-.266-.851-.177-.188-.452-.282-.824-.282-.304 0-.596.045-.876.134a6.68 6.68 0 0 0-.806.317l-.408-.902a4.414 4.414 0 0 1 1.058-.384 4.856 4.856 0 0 1 1.085-.132c.756 0 1.326.165 1.711.494.385.329.577.847.577 1.552v4.002h-.902l-.001-.001zm-1.88-.859c.458 0 .826-.128 1.104-.384.278-.256.416-.615.416-1.077v-.516l-.763.032c-.594.021-1.027.121-1.297.298s-.406.448-.406.814c0 .265.079.47.236.615.158.145.394.218.709.218h.001zm7.557-5.189c.254 0 .464.018.628.054l-.124 1.176a2.383 2.383 0 0 0-.559-.064c-.505 0-.914.165-1.227.494-.313.329-.47.757-.47 1.284v3.105h-1.262V7.218h.988l.167 1.047h.064c.197-.354.454-.636.771-.843a1.83 1.83 0 0 1 1.023-.312h.001zm4.125 6.155c-.899 0-1.582-.262-2.049-.787-.467-.525-.701-1.277-.701-2.259 0-.999.244-1.767.733-2.304.489-.537 1.195-.806 2.119-.806.627 0 1.191.116 1.692.349l-.381 1.015c-.534-.208-.974-.312-1.321-.312-1.028 0-1.542.682-1.542 2.046 0 .666.128 1.166.384 1.501.256.335.631.502 1.125.502a3.23 3.23 0 0 0 1.595-.419v1.101a2.53 2.53 0 0 1-.722.285 4.356 4.356 0 0 1-.932.086v.002zm8.277-.107h-1.268V9.506c0-.458-.092-.8-.277-1.026-.184-.226-.477-.338-.878-.338-.53 0-.919.158-1.168.475-.249.317-.373.848-.373 1.593v2.949h-1.262V4.801h1.262v2.122c0 .34-.021.704-.064 1.09h.081a1.76 1.76 0 0 1 .717-.666c.306-.158.663-.236 1.072-.236 1.439 0 2.159.725 2.159 2.175v3.873l-.001-.001zm7.649-6.048c.741 0 1.319.269 1.732.806.414.537.62 1.291.62 2.261 0 .974-.209 1.732-.628 2.275-.419.542-1.001.814-1.746.814-.752 0-1.336-.27-1.751-.811h-.086l-.231.704h-.945V4.801h1.262v1.987l-.021.655-.032.553h.054c.401-.591.992-.886 1.772-.886zm-.328 1.031c-.508 0-.875.149-1.098.448-.224.299-.339.799-.346 1.501v.086c0 .723.115 1.247.344 1.571.229.324.603.486 1.123.486.448 0 .787-.177 1.018-.532.231-.354.346-.867.346-1.536 0-1.35-.462-2.025-1.386-2.025l-.001.001zm3.244-.924h1.375l1.209 3.368c.183.48.304.931.365 1.354h.043c.032-.197.091-.436.177-.717.086-.281.541-1.616 1.364-4.004h1.364l-2.541 6.73c-.462 1.235-1.232 1.853-2.31 1.853-.279 0-.551-.03-.816-.091v-.999c.19.043.406.064.65.064.609 0 1.037-.353 1.284-1.058l.22-.559-2.385-5.941h.001z' fill='%231D3657'/></g></svg>");background-repeat:no-repeat;background-position:50%;background-size:100%;overflow:hidden;text-indent:-9000px;padding:0!important;width:100%;height:100%;display:block}

  .prism-code {
    display: block;
    white-space: pre;
    background-color: #1D1F21;
    color: #C5C8C6;
    padding: 0.5rem;
    margin: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    outline: none;
    text-shadow: none;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    word-wrap: normal;
    word-break: normal;
    text-align: left;
    word-spacing: normal;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }
  .token.comment {
    font-style: italic;
  }
  .token.punctuation {
    opacity: .7;
  }
  .namespace {
    opacity: .7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: hsl(350, 40%, 70%);
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: hsl(75, 70%, 60%);
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }
  .token.regex,
  .token.important {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.deleted {
    color: red;
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EIjoYw3YTyktCCer_ilOlhE.woff2) format('woff2');
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: local('Merriweather'), local('Merriweather-Regular'), url(https://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EBampu5_7CjHW5spxoeN3Vs.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  html, body {
    font-size: 18px;
    line-height: 1.6;
    font-family: ${bodyFont};
    font-style: normal;
    padding: 0;
    margin: 0;
    color: rgb(46, 68, 78);

    -webkit-font-smoothing: subpixel-antialiased;

    @media (max-width: 1000px) {
      font-size: 16px;
    }
  }

  body.sticky {
    overflow: hidden;
  }

  .root {
    position: relative;
    overflow: auto;
  }

  .big {
    color: white;
    font-size: 1.4em;
  }

  .small {
    color: white;
    font-size: 0.5em;
  }

  ul li {
    margin-bottom: 0.2em;
    line-height: 1.7;
  }
`


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(Component => props =>
      sheet.collectStyles(<Component {...props} />
    ))

    const styles = sheet.getStyleElement()

    return { ...page, styles }
  }

  render () {
    const { styles } = this.props

    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="manifest" href="/static/manifest.json" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

          <meta name="theme-color" content="#da936a" />
          <meta name="author" content="styled-components" />

          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />

          {styles}

          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDWNSLK');` }}></script>
       </Head>

       <body>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDWNSLK" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
         <div className="root">
           <Main />
         </div>

         <NextScript />

         {/* cloud.typography */}
         <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7039052/7606172/css/fonts.css" />
       </body>
     </html>
    )
  }
}
