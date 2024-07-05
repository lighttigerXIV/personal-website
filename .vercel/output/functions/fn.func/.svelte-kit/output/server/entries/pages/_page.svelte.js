import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../chunks/Footer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme;
  theme = "";
  return `${$$result.head += `<!-- HEAD_svelte-mspg77_START -->${$$result.title = `<title>About Me - lighttigerXIV</title>`, ""}<!-- HEAD_svelte-mspg77_END -->`, ""} <div${add_attribute("class", `h-screen w-full bg-gradient max-h-screen text-text overflow-auto p-8 ${theme}`, 0)}><div class="min-h-screen overflow-auto flex items-center justify-center flex-col">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="text-banana font-medium text-5xl" data-svelte-h="svelte-1tn5oia">lighttigerXIV</div> <div class="mt-8 max-w-[800px] text-lg text-justify text-text-two" data-svelte-h="svelte-qryk7u"><div>Hi. My name is Afonso Fonseca, I’m a 23y old <span class="text-kiwi">Por</span><span class="text-banana">tu</span><span class="text-cherry">guese</span> dev and have been coding for over 7 years.</div> <div class="mt-4">I like to code, listen to music, watch anime and tinker with my pc. I can work for any area
				of development but my favorite area is definitely mobile (Android).</div></div></div> ${validate_component(Footer, "Footer").$$render($$result, { theme }, {}, {})}</div>`;
});
export {
  Page as default
};
