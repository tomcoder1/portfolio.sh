```html
<div class="group flex h-full flex-col border border-[#3e4a3d]/40 bg-[#181c22] transition-all hover:border-[#6fdd78]/50">
  <div class="relative h-48 overflow-hidden bg-[#31353c]">
    <div class="absolute inset-0 z-10 bg-[#6fdd78]/10 transition-colors group-hover:bg-transparent"></div>
    <img
      alt="Project screenshot description"
      class="h-full w-full scale-105 object-cover grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
      src="YOUR_IMAGE_URL"
    >
  </div>

  <div class="flex-grow space-y-4 p-6">
    <div class="flex items-start justify-between">
      <h3 class="font-headline text-xl font-bold text-[#dfe2eb] transition-colors group-hover:text-[#6fdd78]">
        PROJECT_NAME
      </h3>
      <span class="bg-[#6fdd78]/20 px-2 py-0.5 font-mono text-[10px] text-[#6fdd78]">
        STATUS
      </span>
    </div>

    <p class="line-clamp-3 font-body text-sm text-[#becab9]">
      Short project description goes here.
    </p>

    <div class="flex flex-wrap gap-2">
      <span class="font-mono text-[10px] text-[#889484]">[ HTML ]</span>
      <span class="font-mono text-[10px] text-[#889484]">[ CSS ]</span>
      <span class="font-mono text-[10px] text-[#889484]">[ JavaScript ]</span>
    </div>
  </div>

  <div class="flex justify-between p-6 pt-0">
    <a class="flex items-center font-mono text-xs text-[#6fdd78] hover:underline" href="LIVE_DEMO_URL" target="_blank" rel="noreferrer">
      <span class="material-symbols-outlined mr-1 text-sm">launch</span> LIVE_DEMO
    </a>
    <a class="flex items-center font-mono text-xs text-[#becab9] hover:text-[#6fdd78]" href="SOURCE_CODE_URL" target="_blank" rel="noreferrer">
      <span class="material-symbols-outlined mr-1 text-sm">source</span> SOURCE
    </a>
  </div>
</div>
```

## Notes

- `PROJECT_NAME`: the title shown on the card
- `STATUS`: examples: `LIVE`, `BETA`, `WIP`, `STABLE`
- `YOUR_IMAGE_URL`: screenshot or preview image
- `LIVE_DEMO_URL`: deployed project link
- `SOURCE_CODE_URL`: GitHub repo link

## Quick usage

1. Open [index.html](c:\Users\ptomm\Documents\Codes\portfolio\index.html).
2. Find the projects section.
3. Replace the placeholder card or duplicate the template above.
4. If you add multiple projects, change the grid wrapper from:

```html
<div class="grid grid-cols-1 gap-8">
```

to:

```html
<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
```
