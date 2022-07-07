<template>

    <div
        class="tt-wysiwyg"
        @click="updateInputWysiwyg"
    >
        <div
            id="editor-container"
            @keyup="updateInputWysiwyg"
        />
    </div>


</template>

<script>

import {MAX_LENGTH_WYSIWYG} from "../../constants";

export default {
    name: "Wysiwyg",
    data() {
        return {
            quill: Object,
            toolbarOptions: [
                ['bold', 'italic'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
            ]
        }
    },
    methods: {
        setInput() {
            const value = this.inputWysiwyg;
            const delta = this.quill.clipboard.convert(value);
            this.quill.setContents(delta, 'user');
            this.updateInputWysiwyg();

        },
        editorWysiwyg() {
            this.quill = new Quill('#editor-container', {
                modules: { toolbar: this.toolbarOptions },
                theme: 'snow',
                placeholder: 'Text...'
            });
        },
        updateInputWysiwyg() {
            this.$emit('update:modelValueWysiwygLength', this.quill.getText().length);
            if (this.quill.getText().length < MAX_LENGTH_WYSIWYG) {
                this.$emit('update:modelValueWysiwyg', this.quill.root.innerHTML);
            }
        },

    },
    mounted() {
        this.editorWysiwyg();
    },
}

</script>

<style >

    .tt-wysiwyg {
        width: 100%;
        margin-bottom: 42px;
    }

</style>
