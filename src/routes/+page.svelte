<script lang="ts">
    import { Evaluator } from "$lib/calculator";
    // import { registerPlugin } from "@capacitor/core";
    // import { onMount } from "svelte";

    let output = $state<number | null>();
    let evaluator = new Evaluator();
    let saveModal: HTMLDialogElement;
    let editableInput = $state<string>("");

    const BUTTONS = new Map<string, () => void>();
    BUTTONS.set("AC", () => {
        editableInput = "";
        output = null;
    });
    BUTTONS.set("C", () => {
        editableInput = editableInput.slice(0, editableInput.length - 1);
    });
    BUTTONS.set("S", () => saveModal.showModal());
    BUTTONS.set("%", () => (editableInput += "% "));
    BUTTONS.set("7", () => (editableInput += "7"));
    BUTTONS.set("8", () => (editableInput += "8"));
    BUTTONS.set("9", () => (editableInput += "9"));
    BUTTONS.set("÷", () => (editableInput += " / "));
    BUTTONS.set("4", () => (editableInput += "4"));
    BUTTONS.set("5", () => (editableInput += "5"));
    BUTTONS.set("6", () => (editableInput += "6"));
    BUTTONS.set("*", () => (editableInput += " * "));
    BUTTONS.set("1", () => (editableInput += "1"));
    BUTTONS.set("2", () => (editableInput += "2"));
    BUTTONS.set("3", () => (editableInput += "3"));
    BUTTONS.set("-", () => (editableInput += " - "));
    BUTTONS.set(".", () => (editableInput += "."));
    BUTTONS.set("0", () => (editableInput += "0"));
    BUTTONS.set("^", () => (editableInput += " ^ "));
    BUTTONS.set("+", () => (editableInput += " + "));
    BUTTONS.set("(", () => (editableInput += "("));
    BUTTONS.set(")", () => (editableInput += ")"));
    BUTTONS.set("=", () => (output = evaluator.evaluate(editableInput)));

    // interface SQLPlugin {
    //     sql(options: { value: string }): Promise<{ value: string }>;
    // }
    // onMount(async () => {
    //     const SQL = registerPlugin<SQLPlugin>("SQL");
    //     const { value } = await SQL.sql({ value: "Hello World!" });
    //     console.log("Response from native:", value);
    // });
</script>

<div class="px-2 pb-4">
    <div inputmode="none" class="text-right min-h-8">
        <!-- <span class="text-primary" contenteditable="false">6 * 9</span> -->
        <span class="text-xl" contenteditable="true" bind:innerText={editableInput}>{editableInput}</span>
    </div>
    <div class="text-xl text-right text-accent min-h-8">{output ?? ""}</div>
</div>
<div class="grid grid-cols-4 grid-rows-6 place-items-center flex-1 bg-base-300 p-4">
    {#each BUTTONS.keys() as btn, idx (idx)}
        <button
            onclick={BUTTONS.get(btn)}
            class:col-span-2={btn === "="}
            class:w-32={btn === "="}
            class="btn btn-square rounded-2xl border border-neutral bg-base-100"
        >
            {btn}
        </button>
    {/each}
    <!-- <div class="-rotate-45">SE</div> -->
</div>
<dialog bind:this={saveModal} class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">hello!</h3>
        <p class="py-4">press esc key or click the button below to close</p>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn">close</button>
            </form>
            <button onclick={() => console.log(1)}>test</button>
        </div>
    </div>
</dialog>
