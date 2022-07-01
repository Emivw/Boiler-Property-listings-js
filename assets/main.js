jQuery(".owl-carousel").owlCarousel({
    // Here goes default configs
    responsive: {
        // breakpoint from 0 up
        0: {
            stagePadding: 0,
            loop: false,
            responsiveClass: true,
            dots: false,
            nav: true,
            autoHeight: true,
            items: 1,
        },
        // breakpoint from 768 up
        768: {
            items: 3,
        },
    },
});

const container = document.getElementById("admin-container");
const items = [{
    id: 1,
    title: "Kurama",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Allied Shinobi Forces",
    img: "../assets/media/"
}, {
    id: 2,
    title: "Gyūki",
    classification: "Tailed Beast",
    species: "Ushi-oni",
    affiliation: "Allied Shinobi Forces",
    img: "../assets/media/"
}, {
    id: 3,
    title: "Chōmei",
    classification: "Tailed Beast",
    species: "Kabutomushi",
    affiliation: "Takigakure",
    img: "../assets/media/"
}, {
    id: 4,
    title: "Saiken",
    classification: "Tailed Beast",
    species: "Slug",
    affiliation: "Kirigakure",
    img: "../assets/media/"
}, {
    id: 5,
    title: "Kokuō",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Iwagakure",
    img: "../assets/media/"
}, {
    id: 6,
    title: "Son Gokū",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Iwagakure",
    img: "../assets/media/"
}, {
    id: 7,
    title: "Isobu",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Kirigakure",
    img: "../assets/media/"
}, {
    id: 8,
    title: "Matatabi",
    classification: "Tailed Beast",
    species: "Bakeneko",
    affiliation: "Kumogakure",
    img: "../assets/media/"
}, {
    id: 9,
    title: "Relaxing Studio",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Allied Shinobi Forces",
    img: "../assets/media/"
}, {
    id: 10,
    title: "Design Apartment",
    classification: "Tailed Beast",
    species: "Kitsune",
    affiliation: "Allied Shinobi Forces",
    img: "../assets/media/"
}]