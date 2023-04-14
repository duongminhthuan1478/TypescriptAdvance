type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary'
type ButtonStyle = `${Size}-${Color}`;


// Make strict literal type, catch error if pass wrong type
function applyButtonStyle(style: ButtonStyle) {
  //................
}

applyButtonStyle('small-primary');
applyButtonStyle('medium-primary');
// applyButtonStyle('medi-primary') //Error typo type