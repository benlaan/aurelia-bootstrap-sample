# This script assumes you are running from the root of the project
# It assumes that it is a sibling to aurelia-bootstrap-plugin
cd node_modules
cmd /c mklink /d "aurelia-bootstrap-plugin" "..\..\aurelia-bootstrap-plugin"
