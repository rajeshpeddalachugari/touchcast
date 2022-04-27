<script>
export default {
  data() {
    return {
      books: [
        {
          publisher: "Putnam",
          description:
            "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.",
          title: "WHERE THE CRAWDADS SING",
          author: "Delia Owens",
          book_image: "/assets/books/9780735219090.jpg",
          rating: "3.5",
        },
        {
          publisher: "Riverhead",
          description:
            "The lives of twin sisters who run away from a Southern Black community at age 16 diverge as one returns and the other takes on a different racial identity but their fates intertwine.",
          title: "THE VANISHING HALF",
          author: "Brit Bennett",
          book_image: "/assets/books/9780525536291.jpg",
          rating: "3.0",
        },
        {
          publisher: "Simon & Schuster",
          description:
            "The 23rd book in the Dave Robicheaux series. Rival Louisiana crime families and a time-traveling superhuman assassin bring up Robicheaux’s personal demons.",
          title: "A PRIVATE CATHEDRAL",
          author: "James Lee Burke",
          book_image: "/assets/books/9781982151683.jpg",
          rating: "4.0",
        },
        {
          publisher: "Little, Brown",
          description:
            "After getting kicked out of M.I.T., Angela Hoot interns with the F.B.I. and tracks the murderous siblings known as the Poet and the Engineer.",
          title: "1ST CASE",
          author: "James Patterson and Chris Tebbetts",
          book_image: "/assets/books/9780316418188.jpg",
          rating: "4.2",
        },
        {
          publisher: "Harper",
          description:
            "The 20th book in the Gabriel Allon series. The art restorer and spy cuts his family’s vacation short to investigate whether Pope Paul VII was murdered.",
          title: "THE ORDER",
          author: "Daniel Silva",
          book_image: "/assets/books/9780062834843.jpg",
          rating: "3.2",
        },
        {
          publisher: "Putnam",
          description:
            "The 54th book in the Stone Barrington series. Things get rough for Stone as he goes after criminals in New York City and Key West.",
          title: "CHOPPY WATER",
          author: "Stuart Woods",
          book_image: "/assets/books/9780593188293.jpg",
          rating: "3.8",
        },
        {
          publisher: "Little, Brown",
          description:
            "A relationship that started in 1993 between Mallory Blessing and Jake McCloud comes to light while she is on her deathbed and his wife runs for president.",
          title: "28 SUMMERS",
          author: "Elin Hilderbrand",
          book_image: "/assets/books/9780316420044.jpg",
          rating: "4.6",
        },
        {
          publisher: "Morrow",
          description:
            "A wedding between a TV star and a magazine publisher on an island off the coast of Ireland turns deadly.",
          title: "THE GUEST LIST",
          author: "Lucy Foley",
          book_image: "/assets/books/9780062868930.jpg",
          rating: "3.5",
        },
        {
          publisher: "Emily Bestler/Atria",
          description:
            "The 19th book in the Scot Harvath series. With a bounty on his head, Harvath makes an alliance with a Norwegian intelligence operative.",
          title: "NEAR DARK",
          author: "Brad Thor",
          book_image: "/assets/books/9781982104061.jpg",
          rating: "3.3",
        },
        {
          publisher: "Flatiron",
          description:
            "A bookseller flees Mexico for the United States with her son while pursued by the head of a drug cartel.",
          title: "AMERICAN DIRT",
          author: "Jeanine Cummins",
          book_image: "/assets/books/9781250209764.jpg",
          rating: "4.0",
        },
        {
          publisher: "Del Rey",
          description:
            "In 1950s Mexico, a debutante travels to a distant mansion where family secrets of a faded mining empire have been kept hidden.",
          title: "MEXICAN GOTHIC",
          author: "Silvia Moreno-Garcia",
          book_image: "/assets/books/9780525620785.jpg",
          rating: "3.6",
        },
        {
          publisher: "Doubleday",
          description:
            "The line between fact and fiction becomes blurred when an author of thrillers is found dead after a hurricane hits Camino Island.",
          title: "CAMINO WINDS",
          author: "John Grisham",
          book_image: "/assets/books/9780385545938.jpg",
          rating: "4.5",
        },
      ],
      sliderOptions: {
        rewind: true,
        perPage: 6,
      },
    };
  },
  methods: {
    show(data) {
      this.$emit("bookDetails", { details: { ...data } });
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-white text-2xl font-bold">Lorem Ipsum</h1>
    <Splide :options="sliderOptions" aria-label="My Favorite Images">
      <SplideSlide v-for="book in books" :key="book.title">
        <div
          @click="show(book)"
          :style="{ backgroundImage: `url(src${book.book_image})` }"
          class="text-white w-[265px] h-[400px] cursor-pointer bg-contain bg-no-repeat flex flex-col-reverse rounded-lg overflow-auto justify-between background-tint"
        >
          <div class="p-2">
            <h4 class="text-lg font-bold">{{ book.title }}</h4>
            <p class="text-sm">{{ book.author }}</p>
            <p class="text-sm">{{ book.publisher }}</p>
          </div>
          <div class="flex flex-row justify-end">
            <h1 class="bg-blue-500 p-2 rounded-b-lg">
              {{ book.rating }} out of 5.0
            </h1>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.background-tint {
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
}
</style>
