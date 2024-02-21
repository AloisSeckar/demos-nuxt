<template>
    <div>
        <h1>default layout</h1>
        <div>This is the default layout used for a page if nothing else is set</div>
        <div>The page content will be rendered between the lines below</div>
        <a href="/">To page 1</a>&nbsp;
        <a href="/second">To page 2</a>&nbsp;
        <a href="/third">To page 3</a>
        <hr />
        <slot />
        <hr />     
        <div>Footer (defined in default layout)</div>   
    </div>
</template>