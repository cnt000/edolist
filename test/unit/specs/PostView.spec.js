import Vue from 'vue'
import PostView from '@/components/PostView'

describe('PostView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PostView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.mdl-textfield__label').textContent)
      .to.equal('Describe me')
  })
})
