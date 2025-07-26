// 공지 autoSlide 이벤트
const slickSlide = document.querySelector("div.slick-track.slick-cloned");

const firstBanner = slickSlide.firstElementChild;
let count = 0;

const autoSlide = () => {
    count++;
    slickSlide.style.transform = `translate(-${632 * count}px)`;
    slickSlide.style.transition = `transform 0.8s`;

    if (count === 2) {
        setTimeout(() => {
            slickSlide.style.transform = `translate(0px)`;
            slickSlide.style.transition = `transform 0s`;
        }, 1000);
        count = 0;
    }
};

setInterval(autoSlide, 3000);

// 숨고픽 버튼을 나타나게 하는 영역
const hoverArea = document.querySelector("section.curation div.slick-slider");

// 숨고픽 버튼(이전/다음)
const prevButton = document.querySelector(
    "section.curation button.slick-arrow.slick-prev"
);
const nextButton = document.querySelector(
    "section.curation button.slick-arrow.slick-next"
);

// 숨고픽 목록 번호
const curationSpan = document.querySelector(
    "section.curation div.curation-header span.curation-page"
);

// 숨고픽 버튼 나타내기
hoverArea.addEventListener("mouseenter", (e) => {
    nextButton.style.visibility = "visible";
});

hoverArea.addEventListener("mouseleave", (e) => {
    prevButton.style.visibility = "hidden";
    nextButton.style.visibility = "hidden";
});

// 버튼으로 숨고픽 이동
const hotTopic = document.querySelector("div.slick-list.slick-pick");
let topicCount = 0;

prevButton.addEventListener("click", (e) => {
    if (topicCount > 0) {
        topicCount--;
        hotTopic.style.transform = `translate(-${610 * topicCount}px)`;
        hotTopic.style.transition = `transform 0.5s`;
        curationSpan.textContent = `${topicCount + 1}/3`;
    }

    if (topicCount > 0) {
        prevButton.style.visibility = "visible";
    } else {
        prevButton.style.visibility = "hidden";
    }
    if (topicCount < 2) {
        nextButton.style.visibility = "visible";
    } else {
        nextButton.style.visibility = "hidden";
    }
});

nextButton.addEventListener("click", (e) => {
    if (topicCount < 2) {
        topicCount++;
        hotTopic.style.transform = `translate(-${610 * topicCount}px)`;
        hotTopic.style.transition = `transform 0.5s`;
        curationSpan.textContent = `${topicCount + 1}/3`;
    }

    if (topicCount > 0) {
        prevButton.style.visibility = "visible";
    } else {
        prevButton.style.visibility = "hidden";
    }
    if (topicCount < 2) {
        nextButton.style.visibility = "visible";
    } else {
        nextButton.style.visibility = "hidden";
    }
});

// 최신 사진 리뷰
const communityReview = document.querySelector(
    "section.community-review-section div.slick-slider div.slick-list"
);
const reviewPrevButton = document.querySelector(
    "div.d-none.slick-initialized button.slick-arrow.slick-prev"
);
const reviewNextButton = document.querySelector(
    "div.d-none.slick-initialized button.slick-arrow.slick-next"
);
let reviewCount = 0;

reviewPrevButton.style.visibility = "hidden";
reviewNextButton.style.visibility = "visible";

reviewPrevButton.addEventListener("click", (e) => {
    if (reviewCount > 0) {
        reviewCount--;
        communityReview.style.transform = `translate(-${600 * reviewCount}px)`;
        communityReview.style.transition = `transform 0.5s`;
    }
    console.log("들어옴");

    if (reviewCount > 0) {
        reviewPrevButton.style.visibility = "visible";
    } else {
        reviewPrevButton.style.visibility = "hidden";
    }
    if (reviewCount < 2) {
        reviewNextButton.style.visibility = "visible";
    } else {
        reviewNextButton.style.visibility = "hidden";
    }
});

reviewNextButton.addEventListener("click", (e) => {
    if (reviewCount < 2) {
        reviewCount++;
        communityReview.style.transform = `translate(-${600 * reviewCount}px)`;
        communityReview.style.transition = `transform 0.5s`;
    }

    if (reviewCount > 0) {
        reviewPrevButton.style.visibility = "visible";
    } else {
        reviewPrevButton.style.visibility = "hidden";
    }
    if (reviewCount < 2) {
        reviewNextButton.style.visibility = "visible";
    } else {
        reviewNextButton.style.visibility = "hidden";
    }
});

// 위로 가기 버튼 나타나기/숨기기
const topButton = document.querySelector("a#top-btn.top-btn");

topButton.style.transition = "opacity 0.3s ease, transform 0.3s ease";
topButton.style.opacity = 0;
topButton.style.transform = "trnaslateY(20px)";

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        topButton.style.opacity = 0;
        topButton.style.transform = "translateY(30px)";
        setTimeout(() => {
            topButton.style.visibility = "hidden";
        }, 300);
    } else {
        topButton.style.visibility = "visible";
        topButton.style.opacity = 1;
        topButton.style.transform = "translateY(-20px)";
    }
});
