#version 450
#extension GL_NV_gpu_shader5 : require
#extension GL_EXT_texture_shadow_lod : require

uniform sampler2DArrayShadow SPIRV_Cross_CombinedShadowMapShadowSamplerPCF;

layout(location = 0) in vec2 texCoords;
layout(location = 1) in float cascadeIndex;
layout(location = 2) in float fragDepth;
layout(location = 3) in float lodLevel;
layout(location = 0) out vec4 _entryPointOutput;

void main()
{
    _entryPointOutput = vec4(textureLod(SPIRV_Cross_CombinedShadowMapShadowSamplerPCF, vec4(vec4(texCoords, cascadeIndex, fragDepth).xyz, fragDepth), lodLevel));
}

