Blockly.Blocks["yolobit_input_color_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: "#ae00ae",
      tooltip: "",
      message0: "%2 cảm biến màu sắc đọc giá trị %1",
      args0: [
        {
          type: "field_dropdown",
          name: "RGB",
          options: [
            ["RED","r"],
            ["GREEN","g"],
            ["BLUE","b"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["yolobit_input_color_sensor_detect"] = {
  init: function () {
    this.jsonInit({
      colour: "#ae00ae",
      tooltip: "",
      message0: "%2 cảm biến màu sắc phát hiện màu %1",
      args0: [
        {
          type: "field_dropdown",
          name: "color",
          options: [
            ["trắng","w"],
            ["đen","d"],
            ["đỏ","r"],
            ["xanh lá (green)", "g"],
            ["xanh dương (blue)", "b"],
            ["vàng", "y"]
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/tsXx1MH/rgb.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Python["yolobit_input_color_sensor_read"] = function (block) {
  var RGB = block.getFieldValue("RGB");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = "from yolobit_tcs34725 import color_sensor";
  var code = "color_sensor.read('" + RGB +"')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["yolobit_input_color_sensor_detect"] = function (block) {
  var color = block.getFieldValue("color");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = "from yolobit_tcs34725 import color_sensor";
  var code = "color_sensor.detect('" + color +"')";
  return [code, Blockly.Python.ORDER_NONE];
};