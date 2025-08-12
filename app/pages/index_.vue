<script setup lang="ts">
import { useContent } from '../../composables/useContent'
const { data: content } = useContent()
</script>

<template>
  <div class="min-h-screen bg-gray-50" v-if="content">

    <div class="px-4">
      <AppointmentCard />
    </div>

    <div class="mt-6 px-5">
      <div class="text-lg font-semibold text-gray-900">{{ content.whatAreYouLookingForTitle }}</div>
    </div>

    <div class="mt-4 space-y-3 px-4">
      <ActionListItem
        v-for="(action, idx) in content.actions"
        :key="idx"
        :icon-bg="action.iconBg"
        :icon-emoji="action.iconEmoji"
        :title="action.title"
        :subtitle="action.subtitle"
      />
    </div>

    <div class="mt-6 px-5 flex items-center justify-between">
      <div class="text-lg font-semibold text-gray-900">{{ content.campaigns.sectionTitle }}</div>
      <button class="text-emerald-500 font-medium">{{ content.campaigns.seeMoreLabel }}</button>
    </div>

    <div class="mt-4 px-4 overflow-x-auto">
      <div class="flex gap-4 pr-4">
        <CampaignCard
          v-for="(item, idx) in content.campaigns.items"
          :key="idx"
          :badge="item.badge"
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
      </div>
    </div>

    <div class="mt-6 px-5 flex items-center justify-between">
      <div class="text-lg font-semibold text-gray-900">{{ content.specialists.sectionTitle }}</div>
      <button class="text-emerald-500 font-medium">{{ content.specialists.seeMoreLabel }}</button>
    </div>

    <div class="mt-3 space-y-3 px-4">
      <SpecialistListItem
        v-for="(sp, idx) in content.specialists.items"
        :key="idx"
        :avatar="sp.avatar"
        :name="sp.name"
        :title="sp.title"
        :rating="sp.rating"
      />
    </div>

    <div class="mt-6 px-5 flex items-center justify-between">
      <div class="text-lg font-semibold text-gray-900">{{ content.departments.sectionTitle }}</div>
      <button class="text-emerald-500 font-medium">{{ content.departments.seeMoreLabel }}</button>
    </div>

    <div class="mt-4 px-4 overflow-x-auto">
      <div class="flex gap-4 pr-4">
        <DepartmentCard
          v-for="(dept, idx) in content.departments.items"
          :key="idx"
          :image="dept.image"
          :title="dept.title"
        />
      </div>
    </div>


    <div class="h-[72px]" />

    <Tabbar :items="content.tabs" />
  </div>
</template>


