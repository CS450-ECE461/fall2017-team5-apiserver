module.exports = {
  '/confirm': {
    policy: 'gatekeeper.auth.bearer',
    post: { action: 'ActivationController' }
  }
}
