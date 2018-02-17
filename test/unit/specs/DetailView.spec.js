import Vue from 'vue'
import CameraView from '@/components/CameraView'

describe('CameraView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CameraView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.camera-modal i.material-icons').textContent)
      .to.equal('camera')
  })
})
