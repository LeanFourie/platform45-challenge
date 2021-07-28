<template>
    <div className="loader">
        <div className="loader__circles">
            <div className="circles__item circles__item--1"></div>
            <div className="circles__item circles__item--2"></div>
            <div className="circles__item circles__item--3"></div>
        </div>
        <p className="loader__label">
            Loading
        </p>
    </div>
</template>

<script>
export default {
	name: 'SnippetLoader'
}
</script>
