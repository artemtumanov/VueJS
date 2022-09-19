import { mount } from '@vue/test-utils'
import Calc from '@/components/Calc.vue'

describe( 'Calc testing', () => {
    test('Test first operator', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')

        // op1Input.element.value = 1
        // op1Input.trigger('input')

        op1Input.setValue(1)

        expect(wrapper.vm.operand1).toBe('1')
    })

    test('Test first operator', ()=> {
        const wrapper = mount(Calc);
        const op2Input = wrapper.find('input[name=op2]')

        op2Input.setValue(3)

        expect(wrapper.vm.operand2).toBe('3')
    })

    test('Test sum', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="+"]')

        op1Input.setValue(1)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    test('Test sub', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="-"]')

        op1Input.setValue(5)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    test('Test mult', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="*"]')

        op1Input.setValue(1)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    })

    test('Test div', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="/"]')

        op1Input.setValue(6)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    test('Test expon', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="**"]')

        op1Input.setValue(2)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(8)
    })

    test('Test intDiv', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const op2Input = wrapper.find('input[name=op2]')
        const sumBtn = wrapper.find('button[name="Int"]')

        op1Input.setValue(5)
        op2Input.setValue(3)
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    test('Test screenKeyboard', ()=> {
        const wrapper = mount(Calc);
        const keyboardBtn = wrapper.find('button[name="1"]')

        keyboardBtn.trigger('click')

        expect(wrapper.vm.operand1).toBe('1')
    })

    test('Test screenKeyboard', ()=> {
        const wrapper = mount(Calc);
        const keyboardBtn = wrapper.find('button[name="6"]')

        keyboardBtn.trigger('click')

        expect(wrapper.vm.operand1).toBe('6')
    })

    test('Test delete btn', ()=> {
        const wrapper = mount(Calc);
        const op1Input = wrapper.find('input[name=op1]')
        const deleteBtn = wrapper.find('button[name="delete"')

        op1Input.setValue(123)
        deleteBtn.trigger('click')

        expect(wrapper.vm.operand1).toBe('12')
    })
})