<div id="homepage-feature" class="carousel slide">
    <ol class="carousel-indicators">
        <li data-traget="#homepage-feature" data-slide-to="0" class="active"></li>
        <li data-traget="#homepage-feature" data-slide-to="1"></li>
        <li data-traget="#homepage-feature" data-slide-to="2"></li>
        <li data-traget="#homepage-feature" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <?php $item = 'item1';
            echo get_post_meta($post->ID, $item, true) ?>
        </div>
        <div class="item">
            <?php $item = 'item2';
            echo get_post_meta($post->ID, $item, true) ?>
        </div>
        <div class="item">
            <?php $item = 'item3';
            echo get_post_meta($post->ID, $item, true) ?>
        </div>
        <div class="item">
            <?php $item = 'item4';
            echo get_post_meta($post->ID, $item, true) ?>
        </div>
        <a class="left carousel-control" href="#homepage-feature" data-silde="prev">
            <span class="icon fa fa-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#homepage-feature" data-silde="next">
            <span class="icon fa fa-chevron-right"></span>
        </a>
    </div>
</div>

<div class="page-contents container">
    <div class="row">
        <div class="col-sm-4">
            <?php $coulmn = 'column1';
            echo get_post_meta($post->ID, $coulmn, true) ?>
        </div>
        <div class="col-sm-4">
            <?php $coulmn = 'column2';
            echo get_post_meta($post->ID, $coulmn, true) ?>
        </div>
        <div class="col-sm-4">
            <?php $coulmn = 'column3';
            echo get_post_meta($post->ID, $coulmn, true) ?>
        </div>
    </div>
</div>