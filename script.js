document.head.insertAdjacentHTML('beforeend', `<style>

/* МОБІЛЬНА ВЕРСІЯ ДЛЯ ВСІХ ЕКРАНІВ */

.app{
  display:block!important;
}

.hero{
  position:relative!important;
  height:auto!important;
  min-height:100vh!important;
}

.gallery{
  width:100%!important;
}


/* ПЛИТКИ */

.tile{
  background:#1b1d1e!important;
  border:0!important;
  outline:0!important;
  box-shadow:none!important;
  padding:0!important;
  line-height:0!important;
  -webkit-appearance:none!important;
}

.tile>img,
.tile>video{
  position:absolute!important;
  z-index:0!important;
  inset:0!important;
  display:block!important;
  width:100%!important;
  height:100%!important;
  object-fit:contain!important;
  vertical-align:top!important;
  border:0!important;
  outline:0!important;
  background:#1b1d1e!important;
}

.tile:before,
.tile:after{
  display:none!important;
}

.tile span,
.tile em,
.tile i{
  z-index:2!important;
  line-height:normal!important;
}

.tile video{
  opacity:1!important;
}


/* ПЕРЕГЛЯДАЧ */

.viewer{
  width:min(1080px,94vw)!important;
  max-width:94vw!important;
  height:94dvh!important;
  max-height:94dvh!important;
  overflow:hidden!important;
  overscroll-behavior:none!important;
}

.photo-view,
.video-view{
  width:100%!important;
  height:100%!important;
  max-width:100%!important;
  max-height:100%!important;
  min-width:0!important;
  min-height:0!important;
  display:grid!important;
  place-items:center!important;
  background:#111!important;
  overflow:hidden!important;
}

.photo-view[hidden],
.video-view[hidden]{
  display:none!important;
}

.photo-view:after,
.video-view:after{
  display:none!important;
}

.photo-view>img{
  display:block!important;
  box-sizing:border-box!important;
  min-width:0!important;
  min-height:0!important;
  max-width:100%!important;
  max-height:100%!important;
  width:100%!important;
  height:100%!important;
  object-fit:contain!important;
}

.photo-view>span,
.video-view>span{
  display:none!important;
}

.video-view video{
  display:block!important;
  visibility:visible!important;
  box-sizing:border-box!important;
  min-width:0!important;
  min-height:0!important;
  width:100%!important;
  height:100%!important;
  max-width:100%!important;
  max-height:100%!important;
  object-fit:contain!important;
  background:#111!important;
}


/* НАВІГАЦІЯ */

.viewer-nav{
  position:absolute;
  z-index:5;
  top:50%;
  display:grid;
  place-items:center;
  width:46px;
  height:64px;
  border:0;
  background:#090a0b70;
  color:#fff;
  font-size:42px;
  transform:translateY(-50%);
}

.viewer-nav.previous{
  left:0;
}

.viewer-nav.next{
  right:0;
}

.viewer-top{
  right:20px!important;
}

.viewer footer{
  display:none!important;
}

.strip{
  display:none!important;
}

.hero header a{
  color:#111;
  -webkit-text-stroke:1px #fff;
  paint-order:stroke fill;
}


/* ІМ'Я ТА ВІК */

.name-row{
  display:flex;
  align-items:baseline;
  gap:12px;
}

.name-row .age{
  font-size:16px;
  font-weight:600;
  color:#fff;
  white-space:nowrap;
}


/* БІОГРАФІЯ */

.tribute{
  overflow:hidden!important;
}

.tribute .tribute-title{
  margin:0;
  font-size:17px;
  font-weight:700;
  line-height:1.3;
}

.tribute .tribute-role{
  margin:7px 0 0;
  font-size:13px;
  font-weight:600;
  line-height:1.45;
}

.tribute .tribute-body{
  font-size:12px;
  line-height:1.6;
}

.tribute-extra{
  max-height:0!important;
  overflow:hidden!important;
  opacity:0!important;
  margin:0!important;

  transition:
    max-height .35s ease,
    opacity .25s ease!important;
}

.tribute.open .tribute-extra{
  max-height:500px!important;
  opacity:1!important;
}


/* ПІКТОГРАМИ */

.hero nav{
  transform:translateY(5mm)!important;
}

.tribute.open ~ nav,
.tribute:not(.open) ~ nav{
  opacity:1!important;
  visibility:visible!important;
  pointer-events:auto!important;
}

</style>`);


/* МЕДІА */

const media = [

  ['IMG_1556.PNG','photo'],
  ['IMG_2147.JPG','photo'],
  ['IMG_2151.JPG','photo'],
  ['IMG_2152.JPG','photo'],
  ['IMG_2153.JPG','photo'],
  ['IMG_2154.JPG','photo'],
  ['IMG_2156.JPG','photo'],
  ['IMG_2158.JPG','photo'],
  ['IMG_2159.JPG','photo'],
  ['IMG_2160.JPG','photo'],
  ['IMG_2742.JPG','photo'],
  ['IMG_3124.JPG','photo'],
  ['IMG_3125.JPG','photo'],
  ['IMG_3135.JPG','photo'],
  ['IMG_3635.JPG','photo'],

  ['IMG_3992.MOV','video'],

  ['IMG_6019.PNG','photo'],
  ['IMG_6764.JPG','photo'],
  ['IMG_8477.PNG','photo'],
  ['IMG_8503.PNG','photo'],

  ['IMG_8504.MP4','video'],

  ['IMG_8505.JPG','photo'],

  ['IMG_8508.MP4','video'],
  ['IMG_8509.MP4','video'],

  ['IMG_8510.JPG','photo'],

  ['IMG_8511.MP4','video'],

  ['IMG_8512.JPG','photo'],
  ['IMG_8513.JPG','photo'],
  ['IMG_8514.JPG','photo'],

  ['IMG_8543.PNG','photo'],

  ['IMG_8544.MOV','video'],

  ['IMG_8556.JPG','photo'],
  ['IMG_8558.JPG','photo'],
  ['IMG_8559.JPG','photo'],
  ['IMG_8560.JPG','photo'],
  ['IMG_8562.JPG','photo'],

  ['IMG_8563.MOV','video'],

  ['IMG_8652.JPG','photo'],
  ['IMG_8654.JPG','photo'],
  ['IMG_8656.JPG','photo'],
  ['IMG_8657.JPG','photo'],
  ['IMG_8659.JPG','photo'],
  ['IMG_8660.JPG','photo'],
  ['IMG_8821.PNG','photo'],
  ['IMG_8862.JPG','photo']

];


/* ШЛЯХИ */

const source =
  name =>
    `media/${name}`;


/* ZIP-АРХІВ У GOOGLE DRIVE */

const archive =
  'https://drive.google.com/uc?export=download&id=1u7Zjt2EAPlTvc-Kreo_HK2yYfGWcoInD';


const downloadAll =
  [...document.querySelectorAll('a, button')]
    .find(
      element =>
        element.textContent
          .trim()
          .toLowerCase()
          .includes('завантажити все')
    );


if(downloadAll){

  downloadAll.onclick =
    () => {

      const link =
        document.createElement('a');

      link.href =
        archive;

      link.target =
        '_blank';

      link.rel =
        'noopener';

      document.body.append(
        link
      );

      link.click();

      link.remove();

    };

}


/* ГОЛОВНЕ ФОТО */

const heroImage =
  document.querySelector(
    '.hero > img'
  );

if(heroImage){

  heroImage.src =
    source(
      'hero-profile.png'
    );

}


/* ПРИБИРАЄМО МЕНЮ */

document
  .querySelector(
    '.menu'
  )
  ?.remove();


/* ІМ'Я ТА ВІК */

const nameBlock =
  document.querySelector(
    '.name'
  );

if(nameBlock){

  nameBlock.innerHTML =
    `

    <div class="name-row">

      <h1>
        Тимур
      </h1>

      <span class="age">
        26 років
      </span>

    </div>

    <p>
      29.04.1999 — 12.11.2025
    </p>

    `;

}


/* БІОГРАФІЯ */

const tribute =
  document.querySelector(
    '.tribute'
  );

if(tribute){

  tribute.innerHTML =
    `

    <p class="tribute-title">
      ВІЧНА СЛАВА ГЕРОЯМ УКРАЇНИ!
    </p>

    <p class="tribute-role">
      Солдат Національної гвардії України
    </p>

    <div class="tribute-extra">

      <p class="tribute-body">
        Народився 29 квітня 1999 року в м. Рівне, Навчався в Рівненському ліцеї № 27, а потім Рівненський ліцей № 8. Закінчив Квасилівський професійний ліцей та здобув фах електрозварювальника. Працював за кордоном. 17 березня 2025 року вступив до лав Національної гвардії України у патрульну роту, згодом перевівся у бойову роту та вирушив на Схід захищати країну. Загинув, гідно виконуючи свій військовий обов’язок, захищаючи незалежність та територіальну цілісність України, 12 листопада 2025 року на Донеччині.
      </p>

    </div>

    <button
      class="more"
      aria-expanded="false">

      Читати більше ⌄

    </button>

    `;


  const more =
    tribute.querySelector(
      '.more'
    );


  more.onclick =
    () => {

      const open =
        !tribute.classList.contains(
          'open'
        );


      tribute.classList.toggle(
        'open',
        open
      );


      more.setAttribute(
        'aria-expanded',
        String(open)
      );


      more.textContent =
        open
          ? 'Згорнути ⌃'
          : 'Читати більше ⌄';

    };

}


/* ГАЛЕРЕЯ */

const grid =
  document.querySelector(
    '.grid'
  );


if(grid){

  media.forEach(
    ([file, kind], index) => {

      const card =
        document.createElement(
          'button'
        );


      card.className =
        `tile ${kind}`;


      card.dataset.kind =
        kind;


      card.dataset.index =
        index;


      card.dataset.file =
        file;


      if(kind === 'photo'){

        card.innerHTML =
          `

          <img
            src="${source(file)}"
            alt="Фото ${index + 1}"
            loading="lazy">

          <span>
            Фото
          </span>

          `;

      }else{

        card.innerHTML =
          `

          <video
            muted
            playsinline
            preload="metadata"
            src="${source(file)}">
          </video>

          <i>
            ▶
          </i>

          <em>
            Відео
          </em>

          <span>
            Відео
          </span>

          `;

      }


      grid.append(
        card
      );

    }
  );

}


const tiles =
  [
    ...document.querySelectorAll(
      '.tile'
    )
  ];


const tabs =
  document.querySelectorAll(
    '.tab'
  );


let activeFilter =
  'all';


const photos =
  media.filter(
    ([, kind]) =>
      kind === 'photo'
  ).length;


const videos =
  media.filter(
    ([, kind]) =>
      kind === 'video'
  ).length;


document
  .querySelectorAll(
    '.hero nav small'
  )
  .forEach(
    (counter, index) => {

      counter.textContent =
        [
          media.length,
          photos,
          videos
        ][index];

    }
  );


function filter(
  kind
){

  activeFilter =
    kind;


  tabs.forEach(
    tab =>
      tab.classList.toggle(
        'active',
        tab.dataset.filter === kind
      )
  );


  tiles.forEach(
    tile => {

      tile.hidden =
        kind !== 'all' &&
        tile.dataset.kind !== kind;

    }
  );

}


tabs.forEach(
  tab =>
    tab.onclick =
      () =>
        filter(
          tab.dataset.filter
        )
);


document
  .querySelectorAll(
    '[data-filter-link]'
  )
  .forEach(
    link =>
      link.onclick =
        () =>
          filter(
            link.dataset.filterLink
          )
);


/* ПРЕВ'Ю ВІДЕО */

let previewTimer;


function stopPreviews(){

  document
    .querySelectorAll(
      '.tile.video video'
    )
    .forEach(
      clip => {

        clip.pause();

        clip.currentTime =
          0;

      }
    );


  window.clearTimeout(
    previewTimer
  );

}


function startPreview(
  card
){

  stopPreviews();


  const clip =
    card.querySelector(
      'video'
    );


  if(!clip)
    return;


  clip
    .play()
    .catch(
      () => {}
    );


  previewTimer =
    window.setTimeout(
      stopPreviews,
      5000
    );

}


if(
  matchMedia(
    '(hover:hover) and (pointer:fine)'
  ).matches
){

  document
    .querySelectorAll(
      '.tile.video'
    )
    .forEach(
      card => {

        card.onmouseenter =
          () =>
            startPreview(
              card
            );


        card.onmouseleave =
          stopPreviews;

      }
    );

}else{

  const observer =
    new IntersectionObserver(
      entries => {

        const target =
          entries
            .filter(
              entry =>
                entry.isIntersecting
            )
            .sort(
              (a,b) =>
                b.intersectionRatio -
                a.intersectionRatio
            )[0];


        if(target){

          startPreview(
            target.target
          );

        }

      },
      {
        threshold:
          [.55,.7]
      }
    );


  document
    .querySelectorAll(
      '.tile.video'
    )
    .forEach(
      card =>
        observer.observe(
          card
        )
    );

}


/* ПЕРЕГЛЯДАЧ */

const viewer =
  document.querySelector(
    '.viewer'
  );


const photoView =
  document.querySelector(
    '.photo-view'
  );


const videoView =
  document.querySelector(
    '.video-view'
  );


const player =
  videoView.querySelector(
    'video'
  );


const viewerTop =
  document.querySelector(
    '.viewer-top'
  );


const viewerIndex =
  document.querySelector(
    '.index'
  );


const type =
  document.querySelector(
    '.type'
  );


viewerTop.innerHTML =
  '';


viewerTop.append(
  viewerIndex
);


document
  .querySelector(
    '.strip'
  )
  ?.remove();


photoView
  .querySelector(
    'span'
  )
  ?.remove();


videoView
  .querySelector(
    'span'
  )
  ?.remove();


const previous =
  document.createElement(
    'button'
  );


const next =
  document.createElement(
    'button'
  );


previous.className =
  'viewer-nav previous';


previous.type =
  'button';


previous.setAttribute(
  'aria-label',
  'Попередній файл'
);


previous.textContent =
  '‹';


next.className =
  'viewer-nav next';


next.type =
  'button';


next.setAttribute(
  'aria-label',
  'Наступний файл'
);


next.textContent =
  '›';


viewer.insertBefore(
  previous,
  photoView
);


viewer.insertBefore(
  next,
  photoView
);


let currentIndex =
  0;


/* ВІДКРИТТЯ МЕДІА */

function openMedia(
  index,
  autoplay = false
){

  currentIndex =
    (
      index +
      media.length
    ) %
    media.length;


  const [
    file,
    kind
  ] =
    media[
      currentIndex
    ];


  const isVideo =
    kind === 'video';


  stopPreviews();


  player.pause();


  player.removeAttribute(
    'src'
  );


  player.load();


  photoView.replaceChildren();


  photoView.hidden =
    isVideo;


  videoView.hidden =
    !isVideo;


  const activeItems =
    media.filter(
      ([, itemKind]) =>
        activeFilter === 'all' ||
        itemKind === activeFilter
    );


  const displayIndex =
    activeItems.findIndex(
      ([activeFile]) =>
        activeFile === file
    ) +
    1;


  viewerIndex.textContent =
    `${String(displayIndex).padStart(2,'0')} / ${activeItems.length}`;


  type.textContent =
    isVideo
      ? 'Відео'
      : 'Фото';


  if(isVideo){

    player.hidden =
      false;


    player.style.display =
      'block';


    player.autoplay =
      autoplay;


    player.src =
      source(
        file
      );


    player.load();


    if(autoplay){

      player
        .play()
        .catch(
          () => {

            player.muted =
              true;


            player
              .play()
              .catch(
                () => {}
              );

          }
        );

    }

  }else{

    photoView.innerHTML =
      `

      <img
        src="${source(file)}"
        alt="Фото ${currentIndex + 1}">

      `;

  }

}


/* ВІДКРИТТЯ КАРТОК */

tiles.forEach(
  card =>
    card.onclick =
      () => {

        openMedia(
          Number(
            card.dataset.index
          ),
          true
        );


        viewer.showModal();

      }
);


/* НАВІГАЦІЯ */

function navigate(
  direction
){

  const activeIndexes =
    media
      .map(
        ([, kind], index) => ({
          kind,
          index
        })
      )
      .filter(
        item =>
          activeFilter === 'all' ||
          item.kind === activeFilter
      )
      .map(
        item =>
          item.index
      );


  const position =
    activeIndexes.indexOf(
      currentIndex
    );


  openMedia(
    activeIndexes[
      (
        position +
        direction +
        activeIndexes.length
      ) %
      activeIndexes.length
    ],
    true
  );

}


previous.onclick =
  () =>
    navigate(
      -1
    );


next.onclick =
  () =>
    navigate(
      1
    );


/* ЗУПИНКА ВІДЕО */

function stopViewerVideo(){

  player.pause();


  player.currentTime =
    0;


  player.removeAttribute(
    'src'
  );


  player.load();

}


/* ЗАКРИТТЯ */

document
  .querySelector(
    '.close'
  )
  .onclick =
    () => {

      stopViewerVideo();


      viewer.close();

    };


viewer.addEventListener(
  'cancel',
  stopViewerVideo
);


viewer.addEventListener(
  'close',
  stopViewerVideo
);