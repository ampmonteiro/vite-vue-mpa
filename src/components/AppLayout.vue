<template>
    <header>
        <h3>
            MPA Blog {{ '<=' }} Vite + Vue
        </h3>
        <nav>
            <a href="/">HOME</a>
            <a href="/about/">ABOUT</a>
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>

    <footer>
        <p>
            &copy;2023
            AMPM
        </p>
        <p>Powered by: Vue || Developed with: Vite</p>
    </footer>
</template>