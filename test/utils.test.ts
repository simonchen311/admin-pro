import { it, expect, describe } from 'vitest';
import { add } from '../src/utils';

describe('utils test', () => {
	it('100% pass', () => {
		expect(1).toBe(1);
	});
	it('add', () => {
		expect(add(1, 3)).toBe(4);
	});
});

// import { mount } from '@vue/test-utils'
// import MyComponent from './MyComponent.vue'
// import { useStore } from './store'

// describe('MyComponent', () => {
//   let wrapper
//   let store

//   beforeEach(() => {
//     store = useStore()
//     wrapper = mount(MyComponent, {
//       global: {
//         plugins: [pinia({ store })],
//       },
//     })
//   })

//   it('should increment the count', async () => {
//     expect(store.count).toBe(0)
//     await wrapper.find('button').trigger('click')
//     expect(store.count).toBe(1)
//   })
// })
