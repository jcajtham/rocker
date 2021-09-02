
export default function(scope) {
  if (scope.Main) {
    window.__SANDBOX_SCOPE__.Main = scope.Main;
  }
  if (scope.Error) {
    window.__SANDBOX_SCOPE__.Error = scope.Error;
  }
  if (scope.reducer) {
    window.__SANDBOX_SCOPE__.reducer = scope.reducer;
  }
  if (scope.saga) {
    window.__SANDBOX_SCOPE__.saga = scope.saga;
  }
  if (scope.props) {
    window.__SANDBOX_SCOPE__.props = scope.props;
  }
  if (scope.Hooks) {
    window.__SANDBOX_SCOPE__.Hooks = scope.Hooks;
  } else {
    window.__SANDBOX_SCOPE__.Hooks = {};
  }
}