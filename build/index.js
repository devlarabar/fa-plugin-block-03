(()=>{"use strict";var e,t={847:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.components,l=JSON.parse('{"u2":"femart/custom-block-03","TN":"FemArt Custom Block 03","W3":"design","qv":"hammer","Y4":{"name":{"type":"string"},"link":{"type":"string"},"mediaID":{"type":"string"},"mediaURL":{"type":"string"}}}');(0,e.registerBlockType)(l.u2,{title:l.TN,icon:l.qv,category:l.W3,attributes:l.Y4,edit:e=>{const{attributes:{name:l,link:o,mediaID:i,mediaURL:s},setAttributes:c}=e,m=(0,n.useBlockProps)();return(0,t.createElement)("div",{...m,className:"fa-03-block"},(0,t.createElement)("div",{class:"fa-03-image-container fa-03-edit-image-container",style:{backgroundImage:`url(${s})`}},(0,t.createElement)(n.MediaUpload,{onSelect:t=>{c({mediaURL:t.url,mediaID:t.id,mediaCaption:t.caption}),console.log("Image selected:",t),console.log(e)},allowedTypes:"image",value:i,render:({open:e})=>(0,t.createElement)(r.Button,{className:i?"fa-03-img-btn image-button":"fa-03-img-btn button button-large",onClick:e},!i&&(0,a.__)("Upload Image","femart-custom-block-03"))}),(0,t.createElement)("div",{class:"artist-info"},o?(0,t.createElement)("a",{href:o,target:"_blank"},l):l)),(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Name"},(0,t.createElement)(r.TextControl,{label:"Artist Name",value:l,onChange:e=>{c({name:e})}}),(0,t.createElement)(r.TextControl,{label:"Artist Link (Full URL)",value:o,onChange:e=>{c({link:e})}}))))},save:e=>{const{attributes:{name:a,link:r,mediaID:l,mediaURL:o}}=e;return n.useBlockProps.save(),o?(0,t.createElement)("div",{class:"fa-03-image-container",style:{backgroundImage:`url(${o})`}},(0,t.createElement)("div",{class:"artist-info"},r?(0,t.createElement)("a",{href:r,target:"_blank"},a):a)):(0,t.createElement)("div",{class:"fa-03-image-container"},(0,t.createElement)("div",{class:"artist-info"},r?(0,t.createElement)("a",{href:r,target:"_blank"},a):a))}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,r,l]=e[m],i=!0,s=0;s<a.length;s++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[a,r,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,i,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var m=s(n)}for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(m)},a=globalThis.webpackChunk_femart_custom_block=globalThis.webpackChunk_femart_custom_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[431],(()=>n(847)));r=n.O(r)})();