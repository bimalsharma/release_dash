$('#branch_overview').modal({
    show : false
});

//Toggles the view of channels on each product
$('.toggler').click(function(){
    $( '.channels#' + $(this).attr('id') ).toggle('slow');
});

$('.channel').click(function(){
    $('.js-clear').html('');
    $('.graph#main-plot').html('<img src="/assets/img/mozchomp.gif" />');
    $('#branch_overview').modal('show');
    
    // var spanner = $(this).data('channel') + " (" + $(this).data('product') + ")";
    //$('span.descriptor#product-channel').text( spanner );
    
    // Retrieve the wanted Qb queries here.
    // YADA YADA

    // Temporarily hardcoding a query for demos
    //  Bugs tracking Firefox 27 from central release to date.
    //   To use direct Qb querying service in future. Ping Kyle.
    var query = {"query":{"filtered":{"query":{"match_all":{}},"filter":{"and":[{"match_all":{}},{"and":[{"term":{"cf_tracking_firefox27":"+"}}]}]}}},"from":0,"size":0,"sort":[],"facets":{"0":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379376000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379376000000}}}]}]}]}},"1":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379462400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379462400000}}}]}]}]}},"2":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379548800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379548800000}}}]}]}]}},"3":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379635200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379635200000}}}]}]}]}},"4":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379721600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379721600000}}}]}]}]}},"5":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379808000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379808000000}}}]}]}]}},"6":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379894400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379894400000}}}]}]}]}},"7":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1379980800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1379980800000}}}]}]}]}},"8":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380067200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380067200000}}}]}]}]}},"9":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380153600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380153600000}}}]}]}]}},"10":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380240000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380240000000}}}]}]}]}},"11":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380326400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380326400000}}}]}]}]}},"12":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380412800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380412800000}}}]}]}]}},"13":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380499200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380499200000}}}]}]}]}},"14":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380585600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380585600000}}}]}]}]}},"15":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380672000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380672000000}}}]}]}]}},"16":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380758400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380758400000}}}]}]}]}},"17":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380844800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380844800000}}}]}]}]}},"18":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1380931200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1380931200000}}}]}]}]}},"19":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381017600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381017600000}}}]}]}]}},"20":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381104000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381104000000}}}]}]}]}},"21":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381190400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381190400000}}}]}]}]}},"22":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381276800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381276800000}}}]}]}]}},"23":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381363200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381363200000}}}]}]}]}},"24":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381449600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381449600000}}}]}]}]}},"25":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381536000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381536000000}}}]}]}]}},"26":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381622400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381622400000}}}]}]}]}},"27":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381708800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381708800000}}}]}]}]}},"28":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381795200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381795200000}}}]}]}]}},"29":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381881600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381881600000}}}]}]}]}},"30":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1381968000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1381968000000}}}]}]}]}},"31":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382054400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382054400000}}}]}]}]}},"32":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382140800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382140800000}}}]}]}]}},"33":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382227200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382227200000}}}]}]}]}},"34":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382313600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382313600000}}}]}]}]}},"35":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382400000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382400000000}}}]}]}]}},"36":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382486400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382486400000}}}]}]}]}},"37":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382572800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382572800000}}}]}]}]}},"38":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382659200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382659200000}}}]}]}]}},"39":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382745600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382745600000}}}]}]}]}},"40":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382832000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382832000000}}}]}]}]}},"41":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1382918400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1382918400000}}}]}]}]}},"42":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383004800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383004800000}}}]}]}]}},"43":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383091200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383091200000}}}]}]}]}},"44":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383177600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383177600000}}}]}]}]}},"45":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383264000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383264000000}}}]}]}]}},"46":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383350400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383350400000}}}]}]}]}},"47":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383436800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383436800000}}}]}]}]}},"48":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383523200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383523200000}}}]}]}]}},"49":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383609600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383609600000}}}]}]}]}},"50":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383696000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383696000000}}}]}]}]}},"51":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383782400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383782400000}}}]}]}]}},"52":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383868800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383868800000}}}]}]}]}},"53":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1383955200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1383955200000}}}]}]}]}},"54":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384041600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384041600000}}}]}]}]}},"55":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384128000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384128000000}}}]}]}]}},"56":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384214400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384214400000}}}]}]}]}},"57":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384300800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384300800000}}}]}]}]}},"58":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384387200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384387200000}}}]}]}]}},"59":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384473600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384473600000}}}]}]}]}},"60":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384560000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384560000000}}}]}]}]}},"61":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384646400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384646400000}}}]}]}]}},"62":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384732800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384732800000}}}]}]}]}},"63":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384819200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384819200000}}}]}]}]}},"64":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384905600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384905600000}}}]}]}]}},"65":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1384992000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1384992000000}}}]}]}]}},"66":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385078400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385078400000}}}]}]}]}},"67":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385164800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385164800000}}}]}]}]}},"68":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385251200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385251200000}}}]}]}]}},"69":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385337600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385337600000}}}]}]}]}},"70":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385424000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385424000000}}}]}]}]}},"71":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385510400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385510400000}}}]}]}]}},"72":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385596800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385596800000}}}]}]}]}},"73":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385683200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385683200000}}}]}]}]}},"74":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385769600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385769600000}}}]}]}]}},"75":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385856000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385856000000}}}]}]}]}},"76":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1385942400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1385942400000}}}]}]}]}},"77":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386028800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386028800000}}}]}]}]}},"78":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386115200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386115200000}}}]}]}]}},"79":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386201600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386201600000}}}]}]}]}},"80":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386288000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386288000000}}}]}]}]}},"81":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386374400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386374400000}}}]}]}]}},"82":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386460800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386460800000}}}]}]}]}},"83":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386547200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386547200000}}}]}]}]}},"84":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386633600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386633600000}}}]}]}]}},"85":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386720000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386720000000}}}]}]}]}},"86":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386806400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386806400000}}}]}]}]}},"87":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386892800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386892800000}}}]}]}]}},"88":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1386979200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1386979200000}}}]}]}]}},"89":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387065600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387065600000}}}]}]}]}},"90":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387152000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387152000000}}}]}]}]}},"91":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387238400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387238400000}}}]}]}]}},"92":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387324800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387324800000}}}]}]}]}},"93":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387411200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387411200000}}}]}]}]}},"94":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387497600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387497600000}}}]}]}]}},"95":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387584000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387584000000}}}]}]}]}},"96":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387670400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387670400000}}}]}]}]}},"97":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387756800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387756800000}}}]}]}]}},"98":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387843200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387843200000}}}]}]}]}},"99":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1387929600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1387929600000}}}]}]}]}},"100":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388016000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388016000000}}}]}]}]}},"101":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388102400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388102400000}}}]}]}]}},"102":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388188800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388188800000}}}]}]}]}},"103":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388275200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388275200000}}}]}]}]}},"104":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388361600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388361600000}}}]}]}]}},"105":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388448000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388448000000}}}]}]}]}},"106":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388534400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388534400000}}}]}]}]}},"107":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388620800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388620800000}}}]}]}]}},"108":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388707200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388707200000}}}]}]}]}},"109":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388793600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388793600000}}}]}]}]}},"110":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388880000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388880000000}}}]}]}]}},"111":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1388966400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1388966400000}}}]}]}]}},"112":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389052800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389052800000}}}]}]}]}},"113":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389139200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389139200000}}}]}]}]}},"114":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389225600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389225600000}}}]}]}]}},"115":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389312000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389312000000}}}]}]}]}},"116":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389398400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389398400000}}}]}]}]}},"117":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389484800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389484800000}}}]}]}]}},"118":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389571200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389571200000}}}]}]}]}},"119":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389657600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389657600000}}}]}]}]}},"120":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389744000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389744000000}}}]}]}]}},"121":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389830400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389830400000}}}]}]}]}},"122":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1389916800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1389916800000}}}]}]}]}},"123":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390003200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390003200000}}}]}]}]}},"124":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390089600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390089600000}}}]}]}]}},"125":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390176000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390176000000}}}]}]}]}},"126":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390262400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390262400000}}}]}]}]}},"127":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390348800000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390348800000}}}]}]}]}},"128":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390435200000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390435200000}}}]}]}]}},"129":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390521600000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390521600000}}}]}]}]}},"130":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390608000000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390608000000}}}]}]}]}},"131":{"terms":{"field":"bug_id","size":0},"facet_filter":{"and":[{"and":[{"range":{"modified_ts":{"lte":1390694400000}}},{"or":[{"missing":{"field":"expires_on"}},{"range":{"expires_on":{"gte":1390694400000}}}]}]}]}}}};

    // Sending the ES query off to retrieve data
    $.ajax({
        url : "http://elasticsearch1.bugs.scl3.mozilla.com:9200" + "/public_bugs/bug_version/_search",
        type: 'POST',
        data: JSON.stringify(query),
        success : function(response){

            // Clear out the graphing area first
            $('.graph#main-plot').html('');
            
            //Extract the ES data that we want 
            var xcount = 0;
            var plot = new Array();
            $.each( response.facets, function( key, value ) {
                // Put the data we have in an array for plotting
                plot.push( { x: xcount , y: value.total } );
                xcount++;
            });

            // View graphing documentation here
            // https://github.com/shutterstock/rickshaw
            var graph = new Rickshaw.Graph( {
                element: document.querySelector('.graph#main-plot'),
                series: [{
                    color: 'steelblue',
                    data: plot
                }]
            });
            graph.render();

            // Remove overlay and loading wheel 

        }, 
        error : function(response){
            console.log(response);
            alert("Oops, are you on MozillaVPN?");

        }, dataType: 'json'
    });  
});


