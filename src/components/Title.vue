<template>
    <div className="title">
        <h1>Galeri Örneği</h1>
        <p>Resim Ekleyebilir.Resimler Firebase veritabanına kaydedilmektedir.</p>
        <p>Resimlerin üzerine tıklandığında modal açılıp kapanabilir.</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .title h1{
        color: var(--secondary);
        font-size: 2rem;
        letter-spacing: 2px;
        margin: 40px 0 10px 0;
        text-align: center;
    }
    .title p{
        text-align: center;
        color: var(--primary);
    }

</style>