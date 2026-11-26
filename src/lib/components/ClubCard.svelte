<script lang="ts">
  export interface ClubInfo {
    name: string;
    description: string;
    room: string;
    day: string;
    studentLeader: string;
    teacher: string;
    instagram?: string;
  }

  interface Props {
    club: ClubInfo;
    class?: string;
  }

  let { club, class: className = '' }: Props = $props();
</script>

<article class="flex flex-col rounded-xl border p-5 {className}">
  <h2 class="text-xl font-semibold tracking-tight">
    {club.name}
  </h2>

  <p class="mt-2 text-sm leading-relaxed opacity-80">
    {club.description}
  </p>

  <hr class="my-4 border-t" />

  <dl class="space-y-1.5 text-sm">
    <div>
      <dt class="inline font-medium">Room:</dt>
      <dd class="inline opacity-80">{club.room}</dd>
    </div>

    <div>
      <dt class="inline font-medium">Day:</dt>
      <dd class="inline opacity-80">{club.day}</dd>
    </div>

    <div>
      <dt class="inline font-medium">Student leader:</dt>
      <dd class="inline opacity-80">{club.studentLeader}</dd>
    </div>

    <div>
      <dt class="inline font-medium">Teacher:</dt>
      <dd class="inline opacity-80">{club.teacher}</dd>
    </div>

    {#if club.instagram}
      <div>
        <dt class="inline font-medium">Instagram:</dt>
        <dd class="inline opacity-80">
          <a
            href="https://instagram.com/{club.instagram.replace(/^@/, '')}"
            target="_blank"
            rel="noopener noreferrer"
            class="underline underline-offset-2"
          >
            @{club.instagram.replace(/^@/, '')}
          </a>
        </dd>
      </div>
    {/if}
  </dl>
</article>