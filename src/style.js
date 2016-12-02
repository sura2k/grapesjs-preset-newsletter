define(function() {

  return (opt = {}) => {

    let editor = opt.editor;
    let sectors = editor.StyleManager.getSectors();

    editor.on('load', function() {

      sectors.reset();
      sectors.add([{
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        properties:[{
          property: 'margin',
          properties:[
            { name: 'Top', property: 'margin-top'},
            { name: 'Left', property: 'margin-left'},
            { name: 'Right', property: 'margin-right'},
            { name: 'Bottom', property: 'margin-bottom'}
          ],
        },{
          property  : 'padding',
          properties:[
            { name: 'Top', property: 'padding-top'},
            { name: 'Right', property: 'padding-right'},
            { name: 'Bottom', property: 'padding-bottom'},
            { name: 'Left', property: 'padding-left'}
          ],
        }],
      },{
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
        properties:[
          { name: 'Font', property: 'font-family'},
          { name: 'Weight', property: 'font-weight'},
          { name: 'Font color', property: 'color'},
          {
            property: 'text-align',
            type: 'radio',
            defaults: 'left',
            list: [
              { value: 'left', name: 'Left', className: 'fa fa-align-left'},
              { value: 'center', name: 'Center', className: 'fa fa-align-center' },
              { value: 'right', name: 'Right', className: 'fa fa-align-right'},
              { value: 'justify', name: 'Justify', className: 'fa fa-align-justify'}
            ],
          },{
            property: 'text-shadow',
            properties: [
              { name: 'X position', property: 'text-shadow-h'},
              { name: 'Y position', property: 'text-shadow-v'},
              { name: 'Blur', property: 'text-shadow-blur'},
              { name: 'Color', property: 'text-shadow-color'}
            ],
        }],
      },{
        name: 'Decorations',
        open: false,
        buildProps: ['background-color', 'border-radius', 'border', 'box-shadow'],
        properties: [{
          property: 'border-radius',
          properties  : [
            { name: 'Top', property: 'border-top-left-radius'},
            { name: 'Right', property: 'border-top-right-radius'},
            { name: 'Bottom', property: 'border-bottom-left-radius'},
            { name: 'Left', property: 'border-bottom-right-radius'}
          ],
        },{
          property: 'box-shadow',
          properties: [
            { name: 'X position', property: 'box-shadow-h'},
            { name: 'Y position', property: 'box-shadow-v'},
            { name: 'Blur', property: 'box-shadow-blur'},
            { name: 'Spread', property: 'box-shadow-spread'},
            { name: 'Color', property: 'box-shadow-color'},
            { name: 'Shadow type', property: 'box-shadow-type'}
          ],
        },{
          property: 'border',
          properties: [
            { name: 'Width', property: 'border-width', defaults: '0'},
            { name: 'Style', property: 'border-style'},
            { name: 'Color', property: 'border-color'},
          ],
        }/*,{
          property: 'background',
          properties: [
            { name: 'Image', property: 'background-image'},
            { name: 'Repeat', property:   'background-repeat'},
            { name: 'Position', property: 'background-position'},
            { name: 'Attachment', property: 'background-attachment'},
            { name: 'Size', property: 'background-size'}
          ],
        }*/],
      }]);

    });

  };
})
