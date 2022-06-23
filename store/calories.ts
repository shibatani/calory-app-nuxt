import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import CaloriesClient from '~/api/calories'
import { CaloryParams } from "types/calories"

@Module({ stateFactory: true, namespaced: true, name: 'calories' })
export default class CaloriesModule extends VuexModule {
  calories: CaloryParams[] = []

  @Mutation
  setCalories (calories: CaloryParams[]) {
    this.calories = calories
  }

  @Action({ rawError: true })
  async fatchCalories () {
    const client = new CaloriesClient()
    const calories = await client.fatchCalories()
    this.setCalories(calories)
  }

  @Action({ rawError: true })
  async createCalory (params: CaloryParams) {
    const client = new CaloriesClient()
    const calory = await client.createCalory(params)
    return calory
  }

  @Action({ rawError: true })
  async deleteCalory (id: string) {
    const client = new CaloriesClient()
    const calory = await client.deleteCalory(id)
    return calory
  }
}