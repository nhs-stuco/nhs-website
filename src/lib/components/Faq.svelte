<script lang="ts">
    export interface FaqItem {
        question: string;
        answer: string;
    }

    interface Props {
        items: FaqItem[];
        id?: string;
        class?: string;
    }

    let { items, id = 'faq', class: className = '' }: Props = $props();
</script>

<section {id} class="divide-y border-y {className}">
    {#each items as item}
        <details class = "group py-4">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-medium select-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                aria-hidden="true"
                class="text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                >
                +
                </span>
            </summary>

            <div class="pt-3 pr-8 text-sm leading-relaxed opacity-80">
                {item.answer}
            </div>
        </details>
    {/each}
</section>