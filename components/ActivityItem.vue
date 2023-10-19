<template>
    <div class="flex flex-col items-start justify-center">
        <div>
            <div>
                <div v-if="!activity.parentId">
                    {{ activity.seasonId }}
                </div>
                {{ activity.label }} : {{ activity.description }}
            </div>
        </div>

        <div class="pl-8">
            <ActivityItem 
                v-for="child in children" 
                :activity="child" 
                :activities="props.activities" 
            />        
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["activity", "activities"])
let activity = props.activity
let activities = props.activities

const children = computed(() => {
    let id = activity.id
    return activities.filter((item) => item.parentId == id)
})

</script>
