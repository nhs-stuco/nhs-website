<script lang="ts">
    import Navbar from '../lib/components/Navbar.svelte';
    import Faq, { type FaqItem } from '../lib/components/Faq.svelte';

    const faqs: FaqItem[] = [
        {
            question: 'What is StuCo?',
            answer: 'a'
        },
        {
            question: 'How do I join StuCo?',
            answer: 'b'
        },
        {
            question: 'What is a student activity fee?',
            answer: 'd'
        },
        {
            question: 'When and where does StuCo meet?',
            answer: 'c'
        },
        {
            question: 'Who are the teacher advisors for StuCo?',
            answer: 'd'
        },
        {
            question: 'Who is apart of StuCo?',
            answer: 'd'
        }
    ];

</script>



<main>
    <div>
        <header>
            <Navbar />
        </header>

        <section class="grid grid-cols-[repeat(24,calc(100vw/24))] grid-rows-[repeat(24,calc((clamp(20rem,100vh,70rem)-5.5rem)/24))] overflow-x-visible [--font-size-hero:12rem]">
            <h1 class ="row-start-6 row-end-18 col-start-3 col-end-23 place-self-center text-center text-(length:--font-size-hero) font-black leading-[0.85]">
                NHS StuCo
            </h1>
        </section>
    </div>

     <!-- Announcements -->
      <section class = "w-[clamp(32rem,60%,56rem)] mx-auto flex flex-col gap-16 py-20">
        <h2 class = "text-[4rem] font-black text-center">
            Announcements
        </h2>
      </section>

      <!-- FAQ -->
      <section class = "w-[clamp(32rem,60%,56rem)] mx-auto flex flex-col gap-16 py-20">
        <h2 class = "text-[4rem] font-black text-left">
          Questions?
        </h2>
        <Faq items={faqs} class="border-neutral-200 divide-neutral-200" />
      </section>
</main>


<!-- need to make different style sections for different size screens -->
