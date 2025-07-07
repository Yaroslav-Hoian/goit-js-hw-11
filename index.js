import{a as f,S as m,i as n}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(s){return f.get("https://pixabay.com/api/",{params:{key:"51210907-49260f6ab8f7fee8b1bad09dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const u=document.querySelector(".gallery"),y=document.querySelector(".loader-box"),g=new m(".gallery-item a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${e}"
            />
        </a>
        <ul class="list-box">
            <li class="item-description">
                <h3 class="subtitle">Likes</h3>
                <p class="subtext">${t}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Views</h3>
                <p class="subtext">${i}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Comments</h3>
                <p class="subtext">${d}</p>
            </li>
            <li class="item-description">
                <h3 class="subtitle">Downloads</h3>
                <p class="subtext">${p}</p>
            </li>
        </ul>
    </li>
`).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){u.innerHTML=""}function x(){document.querySelector(".loader")||y.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function c(){const s=document.querySelector(".loader");s&&s.remove()}const a=document.querySelector(".form"),S=a.querySelector("input[name='search-text']");a.addEventListener("submit",q);function q(s){s.preventDefault(),L();const r=S.value.trim();if(r==="")return n.error({title:"Please write word",position:"topRight"}),a.reset();x(),h(r).then(o=>{setTimeout(()=>{c(),o.length===0?n.error({title:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"}):b(o)},1500)}).catch(o=>{setTimeout(()=>{c(),n.error({title:o.message})},1500)}),a.reset()}
//# sourceMappingURL=index.js.map
