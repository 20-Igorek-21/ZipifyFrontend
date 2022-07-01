<template>

    <div class="tt-wysiwyg"  @click="updateInputWysiwyg" >
        <div id="editor-container"
             @keydown="updateInputWysiwyg"
        />
    </div>

</template>

<script>

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
        editorWysiwyg() {
            this.quill = new Quill('#editor-container', {
                modules: { toolbar: this.toolbarOptions },
                theme: 'snow',
                placeholder: 'Text...'
            });
        },
        updateInputWysiwyg() {
            this.$emit('update:modelValueWysiwyg', this.quill.root.innerHTML)
        },
    },
    mounted() {
        this.editorWysiwyg()
    }
}

</script>

<style >

    .tt-wysiwyg {
        width: 100%;
        margin-bottom: 40px;
    }

</style>
