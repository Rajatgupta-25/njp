import $ from 'jquery';

$(document).ready(function() {
    $('.pressReleaseButton').click(function() {
        $('.down_signPress').show();
        $('.down_signSpeeches').hide();
        $('.down_signArticles').hide();
        $('.pressReleaseSection').show();
        $('.speechesSection').hide();
        $('.articleSection').hide();
    });
    $('.speechesButton').click(function() {
        $('.down_signPress').hide();
        $('.down_signSpeeches').show();
        $('.down_signArticles').hide();
        $('.pressReleaseSection').hide();
        $('.speechesSection').show();
        $('.articleSection').hide();
    });
    $('.articlesButton').click(function() {
        $('.down_signPress').hide();
        $('.down_signSpeeches').hide();
        $('.down_signArticles').show();
        $('.pressReleaseSection').hide();
        $('.speechesSection').hide();
        $('.articleSection').show();
    });
});